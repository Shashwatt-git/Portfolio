# Shashwat Chandel Portfolio

Full-stack personal portfolio scaffold with Next.js 14 + Tailwind + Framer Motion frontend and FastAPI + PostgreSQL backend.

## Structure
- `frontend/` Next.js app router project.
- `backend/` FastAPI API service.
- `database/schema.sql` PostgreSQL schema bootstrap.

## Frontend setup
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

## Backend setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
```

## Env variables
Frontend (`frontend/.env.local`):
- `NEXT_PUBLIC_API_URL=http://localhost:8000`
- `NEXT_PUBLIC_GITHUB_TOKEN=your_github_pat`
- `NEXT_PUBLIC_GITHUB_USERNAME=Shashwatt-git`

Backend (`backend/.env`):
- `DATABASE_URL=postgresql://user:password@localhost/portfolio`

## Deployment
- Frontend on Vercel using `frontend/vercel.json`
- Backend on Render using `backend/render.yaml` (or Railway equivalent)
- Database on Supabase PostgreSQL
