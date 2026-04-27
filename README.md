# Conectra Frontend Prototype

React + Vite frontend prototype prepared to connect with a Strapi backend.

## Implemented Prototype Scope

- Login page using Strapi local auth (`/api/auth/local`)
- Logout action with token cleanup
- Protected `Users` index page (`/api/users`)
- Protected `Activities` index page (`/api/activities` by default)
- Basic folder architecture for modular growth

## Folder Structure

```text
src/
  api/                 # HTTP client and Strapi API modules
  app/                 # top-level app composition and routing
  components/          # reusable UI and routing components
  features/auth/       # auth context and hooks
  layouts/             # authenticated shell/layout
  pages/               # route pages
  styles/              # global styles
  utils/               # Strapi normalization helpers
```

## Environment Variables

Create a local `.env` file from `.env.example`.

- `VITE_STRAPI_URL`: Strapi base URL
- `VITE_STRAPI_AUTH_ENDPOINT`: auth endpoint (default `/api/auth/local`)
- `VITE_STRAPI_USERS_ENDPOINT`: users endpoint (default `/api/users`)
- `VITE_STRAPI_ACTIVITIES_ENDPOINT`: activities endpoint (default `/api/activities`)
- `FRONTEND_PORT`: optional frontend port for Vite and Docker (default `5173`)
- `VITE_HMR_HOST`: optional HMR host (default `localhost`)
- `VITE_HMR_PROTOCOL`: optional HMR protocol (default `ws`)

## Run With Docker (Recommended for all students)

1. Clone the repository.
2. Create `.env` from `.env.example` and adjust `VITE_STRAPI_URL` if required.
3. Start the frontend container:

```bash
docker compose up --build
```

Open the app on `http://localhost:5173` (or your configured `FRONTEND_PORT`).

### Notes for Strapi URL

- Default Docker setup uses `http://host.docker.internal:1337` so the frontend container can reach a Strapi API running on the host machine.
- If Strapi runs in another container stack or server, set `VITE_STRAPI_URL` in `.env` to that reachable URL.

## Local Development Without Docker

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

### WebSocket / HMR Troubleshooting

If the browser shows Vite errors such as module load failures or `failed to connect to websocket`:

1. Do not run both Docker frontend and local `npm run dev` at the same time on the same `FRONTEND_PORT`.
2. Stop one of them before starting the other:

```bash
docker compose down
```

3. Restart the selected frontend mode and open the same port configured in `FRONTEND_PORT`.

Vite now uses `strictPort`, so if the port is occupied it will fail fast instead of silently switching to another port.

## Team Collaboration Workflow (15 Students)

- Keep `main` always deployable.
- Create a feature branch per task/student, e.g. `student/alex-login-fix`.
- Open Pull Requests into `frontend-prototype` for integration testing.
- Merge `frontend-prototype` into `main` only after validation.
- Use Docker (`docker compose up --build`) before opening a Pull Request to guarantee reproducibility.

## Strapi Configuration Notes

For this prototype to work, Strapi must allow:

- `auth/local` login
- authenticated access to `/api/users` (or custom users endpoint)
- access to the configured activities endpoint

If your content type uses another route, set `VITE_STRAPI_ACTIVITIES_ENDPOINT` accordingly.
