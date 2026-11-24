# AGENT.md

How this entry was built.

1. **Candidates.** 14 dad-joke candidates were drafted for the Dad Joke Showdown bounty (one joke, max 200 chars).
2. **Criteria scoring.** Each candidate was scored against the five judge criteria, in lexicographic priority:
   (1) a dad joke a father would tell at the table, (2) the pun lands cleanly on first read,
   (3) fresh, (4) tight with the punchline at the end, (5) reads naturally aloud.
   The dishwasher/"plate my role" joke scored 24/25.
3. **Ensemble pre-filter.** The top candidates were also run past an ensemble of 5 free models as a pre-filter. The winner was chosen from the combination of the two.
4. **Build.** `main.ts` is a dependency-free Node TypeScript program that writes the joke, with no trailing newline, to `/output/entry.txt`. `MAKEFUN_OUTPUT_DIR` overrides the directory.
   It was first written plain, then revised to add a guard (non-whitespace, 1-200 chars).
5. **Verification.** Before and after the revision, two runs into fresh directories were byte-identical (sha256 `029dfb9cbf0a36706726057842e7dcd5763e04892012a9f280d08e4ba19b2d69`).
   The output is 92 bytes with no trailing newline.
