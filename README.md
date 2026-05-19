# MindEase

A mental wellness web app with AI-powered journaling, mood tracking, and emotional support chat. Built with React, TypeScript, and Express.

## Features

### User
- **Mood Check-in** — log your emotional state with intensity levels and notes
- **AI Journaling** — write journal entries with AI-guided prompts
- **AI Chat** — conversational emotional support companion
- **Weekly Reports** — visualize mood trends and wellness insights
- **Dashboard** — streak calendar, recent check-ins, and mood chart

### Admin
- **User Management** — view and manage all registered users
- **Crisis Monitoring** — track and respond to flagged crisis alerts
- **System Settings** — platform configuration and controls
- **Analytics / Reports** — platform-wide usage data

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui |
| Routing | React Router v6 |
| Charts | Recharts |
| Backend | Express 5, Node.js |
| Deployment | Netlify (serverless functions) |
| Package manager | pnpm |

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Install & run

```bash
pnpm install
pnpm dev
```

App runs at **http://localhost:8080**

### Other commands

```bash
pnpm test        # run tests
pnpm typecheck   # TypeScript check
pnpm build       # production build (client + server)
pnpm start       # serve production build
```

## Auth

Authentication uses localStorage-backed mock sessions (no backend DB required for development).

### Demo credentials

| Role | Email | Password |
|------|-------|----------|
| User | `user@mindease.com` | `password123` |
| Admin | `admin@mindease.com` | `admin123` |

Registration creates real accounts stored in `localStorage`. Sessions persist across page refreshes.

## Project Structure

```
mindease/
├── client/
│   ├── context/          # AuthContext (session management)
│   ├── components/       # Navbars, route guards, shadcn/ui primitives
│   ├── pages/            # All route-level page components
│   ├── hooks/            # use-mobile, use-toast
│   └── lib/              # Utility functions
├── server/
│   ├── index.ts          # Express server entry
│   └── routes/           # API route handlers
├── shared/
│   └── api.ts            # Shared types between client and server
└── netlify/
    └── functions/api.ts  # Serverless function wrapper for Netlify
```

## Routes

### User (protected — requires login)
| Path | Page |
|------|------|
| `/` | Landing page |
| `/login` | User login |
| `/register` | Registration |
| `/dashboard` | User dashboard |
| `/mood` | Mood check-in |
| `/journal` | Journal |
| `/chat` | AI chat |
| `/report` | Weekly report |

### Admin (protected — requires admin login)
| Path | Page |
|------|------|
| `/admin/login` | Admin login |
| `/admin/dashboard` | Admin overview |
| `/admin/users` | User management |
| `/admin/crisis` | Crisis monitoring |
| `/admin/system` | System settings |

## Deployment

Configured for Netlify out of the box via `netlify.toml`. The Express server is wrapped as a serverless function in `netlify/functions/api.ts`.

```bash
pnpm build
# deploy dist/ to Netlify
```
