# Researcher Network — Static Website

A simple three-page researcher network website built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — Home, About, Activities and Vision
- `researchers.html` — researcher directory, search/filter and profile modal
- `projects.html` — ongoing/future projects
- `style.css` — responsive design
- `script.js` — researcher data, search/filter, profiles, project tabs and mobile navigation

## Publish with GitHub Pages

1. Upload all files to the root of your GitHub repository.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**.
5. Click **Save**.
6. After GitHub finishes deploying, open the Pages URL shown there.

## Important

This version is a static website. Researcher and project information is stored inside `script.js`.

To add a real researcher:
1. Open `script.js`.
2. Find the `researchers` array.
3. Copy an existing researcher object.
4. Replace the name, role, institution, location, areas, bio and expertise.

To add a project:
1. Find the `projects` array in `script.js`.
2. Add a project object.
3. Use `status: "ongoing"` or `status: "future"`.

No Python, Streamlit or server is required.
