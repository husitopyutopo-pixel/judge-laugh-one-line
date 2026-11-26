import * as fs from "node:fs";

// One original funny line, written to /output/entry.txt. Fixed text,
// written with no trailing newline: the gate counts characters, so the
// file holds exactly the line below — identical on every run.
// No network, no input, no randomness, node:fs only.
const LINE =
  "I asked the barista for something to wake me up, so she handed me my bank statement.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
