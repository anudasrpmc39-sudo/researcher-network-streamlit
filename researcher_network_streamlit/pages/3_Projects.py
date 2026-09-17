import streamlit as st
from data import projects

st.title("Projects")
st.write("Explore ongoing research and future project ideas.")

ongoing=[p for p in projects if p["status"]=="Ongoing"]
future=[p for p in projects if p["status"]=="Future"]

tab1,tab2=st.tabs(["Ongoing Projects","Future Projects"])

def show(p):
    with st.container(border=True):
        a,b=st.columns([3,1])
        with a:
            st.subheader(p["title"])
            st.write(p["description"])
            st.write("**Research area:** "+p["area"])
            st.write("**Methods / technologies:** "+", ".join(p["methods"]))
        with b:
            st.metric("Status",p["status"])
            st.write(p["contact"])

with tab1:
    for p in ongoing: show(p)
with tab2:
    for p in future: show(p)
