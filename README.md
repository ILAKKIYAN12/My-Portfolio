# Ilakkiyan S S — Portfolio

Dark/techy React + Tailwind portfolio with an electric-blue accent, scroll-reveal
animations, and a framed hero photo.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy to Vercel, Netlify, GitHub Pages, etc.

## Editing content

All text content (projects, skills, blog posts, links) lives at the top of
`src/App.jsx` in plain arrays (`PROJECTS`, `SKILLS`, `BLOG`, `ROLES`) — edit
those directly, no need to touch the JSX layout.

Your photo is at `src/assets/profile.jpg` — swap the file (keep the same name)
to update it.

## Notes on content I filled in

- The Sugarcane Growth Analyzer project links to your GitHub profile since the
  file you shared was the tool's code, not a hosted link — swap in the repo
  URL or a live demo link in the `PROJECTS` array once you have one.
- Same for the snacks project — no link was provided, so it currently points
  to your GitHub profile.
- The 3 blog posts are placeholder titles/excerpts matching your project
  topics — replace with real posts whenever you write them.
