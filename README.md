# DropCut Website

Landing page for DropCut, a local Windows video compressor and trimmer.

## Live Site

https://dropcut.pages.dev

## Product

- App repository: https://github.com/LucasHenriqueDiniz/dropcut
- Latest download: https://github.com/LucasHenriqueDiniz/dropcut/releases/latest
- Windows installer: https://github.com/LucasHenriqueDiniz/dropcut/releases/latest/download/DropCut_0.1.1_x64-setup.exe

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Cloudflare Pages

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy

The production site is deployed to Cloudflare Pages.

```bash
pnpm dlx wrangler pages deploy dist --project-name dropcut
```

## Notes

The download button currently points to the latest GitHub Release asset for DropCut `0.1.1`.
If the release asset name changes, update `DOWNLOAD_URL` in `src/App.tsx`.
