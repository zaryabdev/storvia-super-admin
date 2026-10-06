# storvia-super-admin

The Storvia platform-owner console: a Clerk-gated Next.js app for one designated user to browse Stores and manage billing plans, invoices, payments and the financial ledger. It has no database; all data comes from `storvia-admin`'s `/api/super-admin` routes.

Stack: Next.js 13.4 (App Router), React 18, TypeScript, Tailwind, Clerk.

## Setup

```bash
npm install
cp .env.example .env        # then fill in the values
npm run dev                 # http://localhost:4002
```

A running `storvia-admin` (default `http://localhost:4000`) is required, and the Clerk application must be the same one Admin uses.

## More

- `AGENTS.md`: working rules for this repo (`CLAUDE.md` imports it).
- `../storvia-ai-context`: project state, API contracts, decisions and the backlog.
