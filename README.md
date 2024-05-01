# [docs.dofusretro.fr](https://docs.dofusretro.fr)

[![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Workflow](https://github.com/Daweyy/docs.dofusretro.fr/actions/workflows/deploy.yml/badge.svg)](https://github.com/Daweyy/docs.dofusretro.fr)

This is a community-driven documentation about [Dofus Retro](https://www.dofus.com/en/dofus-retro) or any [Ankama Games](https://www.ankama.com) project, that you wanna help to cover.

In this way we want to encourage and share knowledge for fan projects.

> We are in no way affiliated with or supported by Ankama, however we do not encourage or condone any behavior that violates [their ToU](https://account.ankama.com/en/tou).

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

[Bun runtime](https://bun.sh) is recommanded and used for deployements builds, only Bun lockfile should exist in this repository.

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## ✨ Contributors

<a href="https://github.com/daweyy/docs.dofusretro.fr/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=daweyy/docs.dofusretro.fr" />
</a>

## 👀 Want to help ?

Check out [the contributor guide](https://docs.dofusretro.fr/project/contribute).
