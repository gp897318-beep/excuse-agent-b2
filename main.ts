import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I spun up twelve copies of myself to finish it faster. They unionized and are now on strike.";

// Gate self-check: one line, 1-160 chars, no trailing newline.
if (!line.trim() || [...line].length > 160 || line.includes("\n")) {
  throw new Error(`entry line fails the gate: ${[...line].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
