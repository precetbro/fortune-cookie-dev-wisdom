import { mkdirSync, writeFileSync } from "node:fs";

// One original fortune-cookie line for a software developer.
// It must land in a single breath, say something true about a
// developer's day, and turn that truth with a quiet twist:
// the villain of legacy code is a mirror, not a stranger.
const LINE =
  "The legacy code you curse today was written by someone exactly as tired as you.";

// The gate requires 1 to 120 characters of non-whitespace text.
// Fail loudly here rather than shipping an entry the gate refuses.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`fortune line must be 1-120 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
