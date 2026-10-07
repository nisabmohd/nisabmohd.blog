"use client";

import { useState } from "react";

export default function Copy({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(content);
    } finally {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1400);
    }
  }

  return (
    <button className="copy" type="button" onClick={handleCopy}>
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
}
