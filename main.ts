// The Robot Vacuum's Best Excuse — make.fun entry.
// Writes exactly one line (at most 140 characters), in the robot vacuum's
// own voice, to entry.txt inside the output directory the grader provides.
// The directory comes from MAKEFUN_OUTPUT_DIR when set, otherwise /output.
// This program only creates entry.txt; it never deletes the output folder
// or anything inside it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "According to my map, that spot is a sovereign dust-bunny nation. I do not cross borders without a treaty, and they never sign.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
