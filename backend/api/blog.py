from fastapi import APIRouter, HTTPException

router = APIRouter()

POSTS = [
    {"title": "My first ArduPilot PR — contributing to open source autopilot", "slug": "first-ardupilot-pr"},
    {"title": "How I built CodeSentinel — transformer-based vulnerability detection", "slug": "how-i-built-codesentinel"},
]


@router.get("")
def list_posts() -> list[dict]:
    return POSTS


@router.get("/{slug}")
def get_post(slug: str) -> dict:
    for post in POSTS:
        if post["slug"] == slug:
            return post
    raise HTTPException(status_code=404, detail="Post not found")
