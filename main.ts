// Dad Joke Showdown — entry program
// Writes one dad joke (107 characters) to entry.txt, with no trailing newline.
// The joke text below is the entry exactly as submitted — do not alter it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My son said he'd rather live in Vice City than visit me. I said, 'Funny - I feel the same way, vice versa.'";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
