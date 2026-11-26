import * as fs from "node:fs";

// One original funny line, written to /output/entry.txt. Fixed text,
// written with no trailing newline: the gate counts characters, so the
// file holds exactly the line below — identical on every run.
// No network, no input, no randomness, node:fs only.
// Gate: entry.txt must hold 1 to 200 characters of UTF-8 text, more than whitespace, with no trailing newline.
// Deterministic by design: the fixed line is written verbatim on every run, so repeated runs agree byte for byte.
const LINE =
  "I told the barista I needed something to wake me up, so she printed my bank balance on the receipt.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
