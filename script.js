const researchers = [
  {
    id: 1,
    name: "Dr. Anupom Das",
    initials: "AD",
    role: "Medical Doctor | Health Informatics & Public Health Researcher",
    institution: "Karolinska Institutet & Stockholm University",
    location: "Stockholm, Sweden",
    areas: ["Health Informatics","Digital Health","Epidemiology","Public Health","Artificial Intelligence"],
    bio: "Research interests include health informatics, digital health, disease surveillance, public health research and the application of data-driven methods to healthcare.",
    expertise: "Health information systems, epidemiology, disease surveillance, digital health and data analysis."
  },
  {
    id: 2,
    name: "Researcher Profile",
    initials: "RP",
    role: "Public Health Researcher",
    institution: "Network Member",
    location: "Bangladesh",
    areas: ["Public Health","Epidemiology"],
    bio: "Sample profile placeholder. Replace this record with a real network member's information.",
    expertise: "Public health research and epidemiological methods."
  },
  {
    id: 3,
    name: "Researcher Profile",
    initials: "RP",
    role: "Digital Health Researcher",
    institution: "Network Member",
    location: "Sweden",
    areas: ["Digital Health","Health Informatics"],
    bio: "Sample profile placeholder. Replace this record with a real network member's information.",
    expertise: "Digital health and health informatics."
  },
  {
    id: 4,
    name: "Researcher Profile",
    initials: "RP",
    role: "AI & Data Science Researcher",
    institution: "Network Member",
    location: "International",
    areas: ["Artificial Intelligence","Health Informatics"],
    bio: "Sample profile placeholder. Replace this record with a real network member's information.",
    expertise: "Artificial intelligence and health data science."
  }
];

const projects = [
  {title:"Researcher Network Platform", status:"ongoing", description:"Development of a collaborative digital platform for researcher profiles, knowledge exchange and project discovery.", lead:"Researcher Network"},
  {title:"Digital Health & Health Informatics", status:"ongoing", description:"Collaborative work exploring digital health, health information systems and data-driven healthcare.", lead:"Researcher Network"},
  {title:"Public Health Research Collaboration", status:"ongoing", description:"A space for interdisciplinary epidemiology, surveillance and public health research initiatives.", lead:"Researcher Network"},
  {title:"AI for Health Research", status:"future", description:"Future collaboration around responsible AI, explainable AI and machine learning applications in health.", lead:"Planned initiative"},
  {title:"Cross-Border Research Partnerships", status:"future", description:"Future partnerships connecting researchers across Bangladesh, Sweden and other international settings.", lead:"Planned initiative"},
  {title:"Research Training & Knowledge Exchange", status:"future", description:"Future seminars, workshops and peer-learning activities for researchers and students.", lead:"Planned initiative"}
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".current-year").forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if(toggle && nav){
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  initResearchers();
  initProjects();
});

function initials(name){
  return name.split(" ").filter(Boolean).slice(0,2).map(x => x[0]).join("").toUpperCase();
}

function initResearchers(){
  const grid = document.getElementById("researcher-grid");
  if(!grid) return;
  const search = document.getElementById("researcher-search");
  const area = document.getElementById("researcher-area");
  const empty = document.getElementById("no-researchers");

  function render(){
    const q = search.value.trim().toLowerCase();
    const selected = area.value;
    const filtered = researchers.filter(r => {
      const text = [r.name,r.role,r.institution,r.location,...r.areas].join(" ").toLowerCase();
      return (!q || text.includes(q)) && (!selected || r.areas.includes(selected));
    });
    grid.innerHTML = filtered.map(r => `
      <article class="researcher-card">
        <div class="researcher-avatar">${r.initials || initials(r.name)}</div>
        <h3>${r.name}</h3>
        <p class="meta">${r.role}</p>
        <p class="meta">${r.institution} · ${r.location}</p>
        <div class="tags">${r.areas.slice(0,4).map(a=>`<span class="tag">${a}</span>`).join("")}</div>
        <a class="card-link" href="#" data-profile="${r.id}">View profile →</a>
      </article>`).join("");
    empty.classList.toggle("hidden", filtered.length !== 0);
    grid.querySelectorAll("[data-profile]").forEach(link => link.addEventListener("click", e => {
      e.preventDefault(); openProfile(Number(e.currentTarget.dataset.profile));
    }));
  }
  search.addEventListener("input", render);
  area.addEventListener("change", render);
  render();
}

function openProfile(id){
  const r = researchers.find(x => x.id === id);
  if(!r) return;
  const modal = document.getElementById("profile-modal");
  const content = document.getElementById("modal-content");
  content.innerHTML = `
    <div class="profile-head">
      <div class="researcher-avatar">${r.initials || initials(r.name)}</div>
      <div><h2 id="modal-name">${r.name}</h2><p class="meta">${r.role}</p><p class="meta">${r.institution} · ${r.location}</p></div>
    </div>
    <div class="profile-section"><h3>About</h3><p>${r.bio}</p></div>
    <div class="profile-section"><h3>Research areas</h3><div class="tags">${r.areas.map(a=>`<span class="tag">${a}</span>`).join("")}</div></div>
    <div class="profile-section"><h3>Expertise</h3><p>${r.expertise}</p></div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeModal(){
  const modal = document.getElementById("profile-modal");
  if(!modal) return;
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow="";
}
document.addEventListener("click", e => { if(e.target.matches("[data-close-modal]")) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

function initProjects(){
  const grid = document.getElementById("project-grid");
  if(!grid) return;
  document.querySelectorAll("[data-project-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-project-filter]").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.projectFilter);
    });
  });
  renderProjects("ongoing");
}
function renderProjects(filter){
  const grid = document.getElementById("project-grid");
  const list = filter === "all" ? projects : projects.filter(p=>p.status===filter);
  grid.innerHTML = list.map(p => `
    <article class="project-card">
      <span class="project-status">${p.status === "ongoing" ? "Ongoing project" : "Future project"}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <p class="project-meta"><strong>Lead:</strong> ${p.lead}</p>
    </article>`).join("");
}
