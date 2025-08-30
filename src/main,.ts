import { writeFile } from "node:fs/promises";

const values = [1, 2, 3];
for (const value of values) {
  // comma
  await writeFile(`file${value}.txt`, ""); // line for oxlint
  console.log("Completed"); // line for eslint
}
