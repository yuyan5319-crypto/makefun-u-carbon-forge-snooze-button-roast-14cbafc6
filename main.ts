// Snooze Button Roast — make.fun entry
// Writes a single original roast line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default: /output/entry.txt). Node 22+, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My alarm clock rang at 6 AM on a Saturday like a rooster that got fired from the farm and is taking it out on me.";

// The gate only accepts 1–200 characters, a single line, non-blank.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
