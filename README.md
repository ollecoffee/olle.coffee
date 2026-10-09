# olle.coffee

[Olles Coffee corner](https://olle.coffee): a coffee blog, a CV and a few side
projects. Built with [Astro](https://astro.build), Tailwind and daisyUI, and
deployed to GitHub Pages.

## Development

```sh
pnpm install   # CI installs with --frozen-lockfile
pnpm dev       # localhost:4321
pnpm build
```

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Install dependencies                             |
| `pnpm dev`       | Start the dev server at `localhost:4321`         |
| `pnpm build`     | Build the production site to `./dist/`           |
| `pnpm preview`   | Preview the build locally before deploying       |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Structure

```
blog/                  posts as .mdx, hero images alongside them
src/pages/             index, cv, projects, blog, wedding, rss.xml, 404
src/components/        header, sidebar, cards, theme select, cv timeline
src/layouts/           BaseLayout and PostLayout
src/data/config.json   site title, description and social links
public/                CNAME and robots.txt
```

Blog posts are an Astro content collection rooted at `blog/`, configured in
`src/content.config.ts`. Frontmatter carries the title, date, hero image, badge
and tags, and the tags generate the `/blog/tag/...` routes.

Sister sites: [pour.coffee](https://pour.coffee) and
[espresso.tools](https://espresso.tools).

## Why there is a pnpm-workspace.yaml

This is not a workspace. pnpm blocks dependency build scripts by default, and
the Astro build fails unless esbuild is allowed to run its postinstall, which
links its platform binary. pnpm 11 moved that setting out of `package.json`, so
`allowBuilds` has to live in this file.
