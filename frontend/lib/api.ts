const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function analyzeCode(code: string) {
  const res = await fetch(`${API_BASE}/api/demo/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.issues ?? [];
}
