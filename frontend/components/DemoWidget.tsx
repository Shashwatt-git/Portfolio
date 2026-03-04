"use client";

import { useState } from "react";
import { analyzeCode } from "@/lib/api";

type Issue = { rule: string; severity: string; message: string };

export default function DemoWidget() {
  const [code, setCode] = useState("def login(password):\n    print(password)");
  const [issues, setIssues] = useState<Issue[]>([]);

  return (
    <section className="mx-auto my-16 max-w-4xl rounded-3xl border border-black/10 p-6">
      <h3 className="font-display text-3xl font-bold">Try CodeSentinel</h3>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} className="mt-4 h-40 w-full rounded-xl border border-black/20 p-3 text-sm" />
      <button
        onClick={async () => setIssues(await analyzeCode(code))}
        className="mt-4 rounded-full bg-text px-5 py-2 text-sm text-white"
      >
        Analyze for vulnerabilities
      </button>
      <div className="mt-4 space-y-2">
        {issues.map((issue, i) => (
          <p key={`${issue.rule}-${i}`} className="text-sm">
            <span className="mr-2 rounded-full border border-black/20 px-2 py-0.5 text-xs">{issue.severity}</span>
            {issue.message}
          </p>
        ))}
      </div>
    </section>
  );
}
