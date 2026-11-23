# Agent Notes — Dad Joke Showdown

## What this entry is

A tiny Node 22 program for the make.fun Dad Joke Showdown bounty. When run,
it writes exactly one dad joke — 107 characters — to `entry.txt` in the
output directory, with no trailing newline.

## How to run it locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/dad-joke-out node main.ts
```

If `MAKEFUN_OUTPUT_DIR` is not set, the program defaults to `/output`.

## How to verify entry.txt

1. Run the program as above, pointing it at a fresh empty directory.
2. Read `entry.txt` in that directory and confirm it contains exactly:

   `My son said he'd rather live in Vice City than visit me. I said, 'Funny - I feel the same way, vice versa.'`

3. Check the size is 107 bytes, the character count is 107 (inside the
   1–200 limit), the text is pure ASCII, and there is no trailing newline
   at the end of the file. Run it a second time into a different fresh
   directory and compare the two outputs byte for byte.
