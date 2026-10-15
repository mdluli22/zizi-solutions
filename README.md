# Zizi Solutions

Business website built with Next.js 15, React 19, TypeScript and Tailwind CSS 4.

## Development

Use Node.js 20.9 or later (Node.js 22 recommended).

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm audit
```

The contact-route tests mock SMTP; they do not send messages.

## Contact email configuration

Set these environment variables on the server, or in `.env.local` for local development:

- `SMTP_HOST`: mail server hostname.
- `SMTP_USER`: authenticated sender email address.
- `SMTP_PASS`: mail server password.
- `SMTP_PORT`: defaults to `465`.
- `SMTP_SECURE`: optional `true` or `false`; defaults to `true` for port 465 and `false` for other ports (including STARTTLS on 587).
- `CONTACT_EMAIL`: optional enquiry recipient; defaults to `admin@zizisolutions.co.za`.

Never commit SMTP credentials. Actual email delivery must be verified against the configured mail server.

## Production

```sh
npm run build
npm start
```

`npm start` copies public assets and compiled static files into the standalone output, then runs its server. Set `PORT` and optionally `HOSTNAME` for your hosting environment. If deploying only the standalone folder, include `public` and `.next/static` alongside its server.

## Dependency compatibility

The PostCSS override keeps the framework and styling pipeline on a patched PostCSS 8 release. The lint plugin's glob override stays within glob 10 while applying its security patch. The patched 14.2 ESLint configuration remains compatible with ESLint 8 and avoids the vulnerable glob dependency chain in later lint configurations.

Tailwind CSS 4 targets modern browsers (Safari 16.4+, Chrome 111+, Firefox 128+). Service illustration generation details are in `docs/service-imagery.md`.

## Public AI reference files

`public/agents.md`, `public/llms.txt` and `public/llms-full.txt` are served at the site root. They summarise the business and link to its public pages. Update them when services, contact details or hours change; `lib/services.ts`, the About page and the Contact page are the content sources. Keep `agents.md` in `public/`, separate from repository agent instructions.

`app/robots.ts` serves `/robots.txt`, permits all crawlers and links to the sitemap. The reference files provide optional context for tools that choose to read them; they do not guarantee indexing, trust, citations or recommendations by AI services. Deployment is required before changes appear on the live domain.
