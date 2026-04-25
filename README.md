# personal-website

Dylan Norquist's personal site. Built with [Astro](https://astro.build/).

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the production build locally
```

## Layout

- `src/layouts/Base.astro` — shared shell (nav, footer, global styles)
- `src/pages/` — top-level pages: home, about, projects, resume, blog index
- `src/pages/blog/` — one `.astro` file per blog post
- `public/` — static assets served at the site root

## Adding a blog post

1. Copy `src/pages/blog/hello-world.astro` to a new file named after the slug.
2. Update the `Base` props, `articleSchema`, post meta, and body.
3. Add an entry to the `posts` array in `src/pages/blog.astro`.
