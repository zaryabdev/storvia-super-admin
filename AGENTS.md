# AGENTS.md: storvia-super-admin

## What this repo is

The Storvia platform-owner console, used by one designated Clerk user (`SUPER_ADMIN_CLERK_USER_ID`). It lists Stores and manages billing plans, invoices, payments and the financial ledger. It is a **frontend only**: it has no database and calls `storvia-admin`'s `/api/super-admin/...` routes.

## Project context lives in `../storvia-ai-context`

Read, in order:
1. `PROJECT_BRIEF.md`
2. `projects/super-admin/CONTEXT.md`
3. `RELEASES.md` (current iteration and Backlog)
4. `DECISIONS.md`, before touching billing, API contracts, auth, tenancy or money.

The Super Admin API contract lives in `../storvia-ai-context/projects/admin/CONTEXT.md` ("Super Admin API"). Source code wins over docs. If they disagree, follow the source and fix the doc.

## Commands

- `npm run dev`: dev server on port 4002. It needs a running Admin (`ADMIN_API_URL`, usually `http://localhost:4000`).
- `npm run build`, `npm run lint`, `npx tsc --noEmit` (no test framework: these are the checks). `npm start` serves on port 4002.
- Env vars are listed in `.env.example`.

## Hard rules

Working:
- Do not commit, push or switch branches unless asked.
- No new dependencies without asking. Keep changes scoped to the request.
- Never write real env values into files.

Architecture:
- No Prisma, no database access and no `DATABASE_URL` here. Admin is the only backend; do not modify Admin from this repo. If Admin needs a change, say so and coordinate.
- No business or billing calculation here: show what Admin returns (money as the strings Admin sends).
- Admin calls go through the server-only client (`lib/admin-api.ts`), which attaches the Clerk session. Never expose `ADMIN_API_URL` or any secret to the browser.
- Access is for the single designated Super Admin only. Admin enforces it on every request; the UI gate is not the security boundary.

## Gotchas

- Next.js 13.4.5 (App Router). Unlike Admin and Storefront, `lucide-react` is a caret range (`^0.244.0`) here; do not assume the 0.577.0 pin.
- Clerk must be the same Clerk application as Admin's, or the user id will not match.
- The build fetches the Inter Google font (`next/font/google`); in restricted environments this can fail the build. Say so rather than treating it as a code error.

## Updating docs

After a change, update `../storvia-ai-context` (the affected `CONTEXT.md`, `RELEASES.md`, `QA.md`), not this file, unless the working rules themselves changed.
