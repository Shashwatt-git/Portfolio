from fastapi import APIRouter

router = APIRouter()


@router.get("/status")
def github_proxy_status() -> dict[str, str]:
    return {"status": "stubbed"}
