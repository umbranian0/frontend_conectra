# ConnectTroca Frontend

Base frontend for the ConnectTroca mockup built with React and Vite.

## Project Structure

- `src/`: application code
- `planning_project/`: PDF, ERD, WBS and planning assets
- `Dockerfile`: frontend container image
- `docker-compose.yml`: frontend development environment

## Prerequisites

- Node.js 18+ for local frontend work
- npm 9+
- Docker Desktop if you want to run the containerized environment

## Local Frontend Commands

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run the development server on `0.0.0.0`:

```bash
npm run dev:host
```

Create a production build:

```bash
npm run build
```

Preview the built app:

```bash
npm run preview
```

The frontend is available at:

- `http://localhost:5173` for `npm run dev`
- `http://localhost:4173` for `npm run preview` when you pass host/port explicitly

## Docker Commands

Build and start the frontend environment:

```bash
npm run docker:up
```

Stop the frontend environment:

```bash
npm run docker:down
```

Direct Docker Compose commands:

```bash
docker compose up --build
docker compose down
```

The container starts the Vite development server and exposes it on `http://localhost:5173`.

## Full Workspace Commands

There is a sibling directory at `../backend_conectra`, but it is currently an upstream Strapi monorepo, not a project-specific API app wired to this frontend.

What exists today:

- this repository contains the runnable frontend
- `../backend_conectra/docker-compose.yml` starts PostgreSQL and MySQL infrastructure only
- there is no dedicated backend application entrypoint in the sibling folder that matches this frontend yet

If you still want to bring up the frontend together with the backend database containers, use:

```bash
npm run docker:up:full
```

That expands to:

```bash
docker compose -f docker-compose.yml -f ../backend_conectra/docker-compose.yml up --build
```

To stop that combined environment:

```bash
npm run docker:down:full
```

## Files Added For Containerization

- [Dockerfile](./Dockerfile)
- [docker-compose.yml](./docker-compose.yml)
- [.dockerignore](./.dockerignore)

## Notes

- The `build` script uses a reduced Node heap because this machine is low on available virtual memory.
- The planning PDF and images remain under `planning_project/` and are excluded from the Docker build context.