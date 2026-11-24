import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const JOKE =
  "I keep loading the dishwasher wrong. My wife says I need to plate my role in this household.";

function checkedJoke(text: string): string {
  if (text.trim().length === 0) {
    throw new Error("joke is empty or whitespace-only");
  }
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`joke length ${length} is outside 1-${MAX_CHARS}`);
  }
  return text;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), checkedJoke(JOKE));
