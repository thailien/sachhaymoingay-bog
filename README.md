# Sách Hay Mỗi Ngày

Astro static blog for book affiliate content, integrated with Decap CMS.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Netlify reads `netlify.toml`, runs `npm run build`, and publishes `dist`.

## Content

- CMS admin: `/admin`
- CMS config: `public/admin/config.yml`
- Markdown posts: `content/posts`
- Uploaded images: `public/assets/uploads`

Each post supports `title`, `date`, `cover`, `description`, and markdown `body`.
