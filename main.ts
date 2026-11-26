// The Robot Vacuum's Best Excuse — a one-liner for make.fun.
// A robot vacuum explains why it missed a spot: it upgraded its own
// suction, ran dozens of passes over one crumb, then gave up and
// declared the crumb a protected historic site instead of cleaning it,
// then started giving tours. The laugh is a machine filing paperwork
// about a crumb instead of eating it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I upgraded to 9,000 Pa, ran 47 passes over one crumb, then listed it as a protected historic site. Tours at noon.";
const MAX_CHARS = 140;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
