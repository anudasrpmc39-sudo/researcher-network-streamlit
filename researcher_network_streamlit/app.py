import streamlit as st

st.set_page_config(page_title="Researcher Network", page_icon="🔬", layout="wide")

st.markdown("""
<style>
.block-container{max-width:1200px;padding-top:2rem}
.hero{padding:3rem;border-radius:24px;background:linear-gradient(135deg,#0b3d5c,#176b87,#4ca1a3);color:white}
.card{padding:1.2rem;border:1px solid #e5e7eb;border-radius:16px;background:white;min-height:140px}
.section{font-size:1.8rem;font-weight:700;margin:2rem 0 1rem}
.muted{color:#64748b}
</style>
""", unsafe_allow_html=True)

st.markdown("""
<div class="hero">
<h1>Researcher Network</h1>
<p>A connected academic platform for discovering researchers, research activities,
ongoing projects and future collaboration opportunities.</p>
</div>
""", unsafe_allow_html=True)

st.markdown('<div class="section">About the Network</div>', unsafe_allow_html=True)
st.write("Researcher Network brings researcher profiles, expertise, publications, projects and collaboration interests together in one accessible platform.")

cols=st.columns(3)
items=[
("👩‍🔬 Researchers","Discover researchers by discipline, institution, expertise and research interests."),
("📚 Activities","Showcase publications, conferences, methods, technical skills and academic activities."),
("🚀 Projects","Explore ongoing research and future ideas for collaboration.")
]
for c,(t,x) in zip(cols,items):
    with c:
        st.markdown(f'<div class="card"><h3>{t}</h3><p class="muted">{x}</p></div>',unsafe_allow_html=True)

st.markdown('<div class="section">Activities</div>', unsafe_allow_html=True)
cols=st.columns(4)
for c,t,x in zip(cols,
    ["Research","Training","Collaboration","Knowledge Sharing"],
    ["Original studies, reviews, data analysis and interdisciplinary research.",
     "Workshops, seminars, mentoring and capacity building.",
     "Connect researchers around shared questions and methods.",
     "Publications, presentations, datasets and research resources."]):
    with c:
        st.markdown(f'<div class="card"><h4>{t}</h4><p class="muted">{x}</p></div>',unsafe_allow_html=True)

st.markdown('<div class="section">Our Vision</div>', unsafe_allow_html=True)
st.info("Build a connected research community where people can find expertise, understand what others are working on, and identify opportunities for collaboration.")
st.markdown("---")
st.caption("Researcher Network • Built with Python and Streamlit")
