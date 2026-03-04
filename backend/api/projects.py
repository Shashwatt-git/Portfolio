from fastapi import APIRouter, HTTPException

router = APIRouter()

PROJECTS = [
    {
        "title": "AURA — Autonomous Multi-Modal AI Agent",
        "slug": "aura",
        "description": "Multi-modal autonomous AI agent using LangGraph, CrewAI.",
        "tech_stack": ["Python", "LangGraph", "CrewAI", "FastAPI"],
    },
    {
        "title": "CodeSentinel — AI Code Security Analyzer",
        "slug": "codesentinel",
        "description": "AI-powered vulnerability detection in codebases.",
        "tech_stack": ["Python", "Transformers", "FastAPI", "React"],
    },
]


@router.get("")
def list_projects() -> list[dict]:
    return PROJECTS


@router.get("/{slug}")
def get_project(slug: str) -> dict:
    for project in PROJECTS:
        if project["slug"] == slug:
            return project
    raise HTTPException(status_code=404, detail="Project not found")
