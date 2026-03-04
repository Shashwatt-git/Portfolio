from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_research() -> list[dict]:
    return [
        {
            "title": "Hybrid Metaheuristic Optimization Algorithm",
            "publication": "Springer Nature — AI & ML Volume",
            "year": 2026,
        }
    ]
