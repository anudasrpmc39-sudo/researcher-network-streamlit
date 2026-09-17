import streamlit as st
from data import researchers

st.title("Researchers")
st.write("Search the directory and open a researcher profile for more details.")

c1,c2,c3=st.columns([2,1,1])
with c1:
    search=st.text_input("Search",placeholder="Name, institution, expertise...")
with c2:
    area=st.selectbox("Research area",["All"]+sorted({r["area"] for r in researchers}))
with c3:
    inst=st.selectbox("Institution",["All"]+sorted({r["institution"] for r in researchers}))

filtered=researchers
if search:
    q=search.lower()
    filtered=[r for r in filtered if q in (r["name"]+" "+r["title"]+" "+r["institution"]+" "+r["area"]+" "+" ".join(r["interests"])).lower()]
if area!="All": filtered=[r for r in filtered if r["area"]==area]
if inst!="All": filtered=[r for r in filtered if r["institution"]==inst]

st.caption(f"{len(filtered)} researcher(s) found")

for r in filtered:
    with st.container(border=True):
        a,b,c=st.columns([1,3,1])
        with a: st.image(r["photo"],width=120)
        with b:
            st.subheader(r["name"])
            st.write(f"**{r['title']}** · {r['institution']}")
            st.write(r["bio"])
            st.write(" ".join([f"`{x}`" for x in r["interests"][:4]]))
        with c:
            if st.button("View profile",key=f"p{r['id']}",use_container_width=True):
                st.session_state["selected"]=r["id"]

        if st.session_state.get("selected")==r["id"]:
            st.markdown("---")
            st.markdown(f"### {r['name']} — Full Profile")
            x,y=st.columns(2)
            with x:
                st.write(f"**Position:** {r['title']}")
                st.write(f"**Institution:** {r['institution']}")
                st.write(f"**Location:** {r['location']}")
                st.write(f"**Research area:** {r['area']}")
                st.write("**Research interests:** "+", ".join(r["interests"]))
            with y:
                st.write("**Research experience:**")
                st.write(r["experience"])
                st.write("**Skills & expertise:** "+", ".join(r["skills"]))
                st.write("**Selected outputs:**")
                for o in r["outputs"]: st.write("- "+o)
            if r.get("linkedin"): st.link_button("LinkedIn",r["linkedin"])
