# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

The project uses **Next.js 16.2.11**, newer than your training data (see AGENTS.md above) — check `node_modules/next/dist/docs/` (app-router docs under `01-app/`) before writing Next.js-specific code.

## Project overview

A Korean-language landing page for a Naver Place / blog marketing agency, built with Next.js App Router. The page (`app/page.tsx`) is a single client component with a hero section, a features grid, and a lead-capture contact form. Form submissions are persisted to Postgres via a server action.

## Commands

```bash
npm run dev          # start dev server (localhost:3000)
npm run build         # production build
npm run start          # run production build
npm run lint          # eslint
npm run db:generate     # generate a Drizzle migration from drizzle/schema.ts
npm run db:push        # push schema changes directly to the database
npm run db:studio       # open Drizzle Studio
```

There is no test suite configured in this repo.

## Architecture

- **App Router, single page**: everything the user sees lives in [app/page.tsx](app/page.tsx) (`"use client"`) — hero, feature cards, and the contact form all in one file, with local `useState` for form fields and submission state.
- **Server action for writes**: [app/actions.ts](app/actions.ts) exports `submitLead`, a `"use server"` action that validates the four form fields are non-empty and inserts a row into the `leads` table. The client page calls this directly instead of going through a route handler.
- **Database layer**: [lib/db.ts](lib/db.ts) creates the Drizzle client (`postgres-js` driver) from `process.env.DATABASE_URL`. `prepare: false` is required because the connection goes through Supabase's transaction-mode pooler, which doesn't support prepared statements.
- **Schema**: [drizzle/schema.ts](drizzle/schema.ts) defines the single `leads` table (name, email, phone, message, createdAt). Schema changes should go through `db:generate` (writes to `drizzle/migrations/`) and `db:push`, driven by [drizzle.config.ts](drizzle.config.ts).
- **Env**: `DATABASE_URL` must be set (see `.env`, gitignored) — a Supabase Postgres connection string via the ap-northeast-2 pooler.
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`), configured through `@theme inline` in [app/globals.css](app/globals.css) rather than a `tailwind.config`. Fonts are Geist Sans/Mono loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx).
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/lib/db`, `@/drizzle/schema`.
