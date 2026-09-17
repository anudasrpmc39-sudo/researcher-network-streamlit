# Researcher Network — Streamlit

Three-page researcher portfolio/network website.

## Pages
1. Home — About, activities and vision
2. Researchers — searchable researcher directory and detailed profiles
3. Projects — ongoing and future projects

## Run locally
```bash
python -m venv .venv
```
Windows:
```bash
.venv\Scripts\activate
```
Mac/Linux:
```bash
source .venv/bin/activate
```
Then:
```bash
pip install -r requirements.txt
streamlit run app.py
```

## Customize
Edit `data.py` to replace example researcher and project records.

For GitHub:
```bash
git init
git add .
git commit -m "Initial researcher network"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

For Streamlit Community Cloud, connect the GitHub repository and select `app.py` as the main file.
