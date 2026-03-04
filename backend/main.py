from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api import blog, github_proxy, projects, research, demo

app = FastAPI(title="Shashwat Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(blog.router, prefix="/api/blog", tags=["blog"])
app.include_router(research.router, prefix="/api/research", tags=["research"])
app.include_router(github_proxy.router, prefix="/api/github", tags=["github"])
app.include_router(demo.router, prefix="/api/demo", tags=["demo"])


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
