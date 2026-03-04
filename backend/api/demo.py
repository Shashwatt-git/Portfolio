import re

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class AnalyzePayload(BaseModel):
    code: str


@router.post("/analyze")
def analyze(payload: AnalyzePayload) -> dict[str, list[dict[str, str]]]:
    code = payload.code.lower()
    issues: list[dict[str, str]] = []

    checks = [
        (r"eval\(", "high", "Use of eval() can lead to arbitrary code execution."),
        (r"exec\(", "high", "Use of exec() is risky and may execute untrusted input."),
        (r"password", "medium", "Potential hardcoded credential handling detected."),
        (r"md5", "medium", "Weak hash algorithm detected. Prefer SHA-256+ or bcrypt/argon2."),
        (r"subprocess\.popen", "medium", "Review subprocess usage for shell injection risks."),
    ]

    for pattern, severity, message in checks:
        if re.search(pattern, code):
            issues.append({"rule": pattern, "severity": severity, "message": message})

    return {"issues": issues}
