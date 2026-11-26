// The comment above the code: one honest line for the fragile
// production code everyone is afraid to touch. The program below
// simply writes that line to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

function checkedEntry(line: string): string {
  if (line.trim().length === 0 || line.length > 200) {
    throw new Error("entry must be 1-200 characters");
  }
  return line;
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

const ENTRY =
  "// This works because nobody knows why it works. I wrote it. I don't know why it works.";

function main(): void {
  const line = checkedEntry(ENTRY);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), line, "utf8");
}

main();
