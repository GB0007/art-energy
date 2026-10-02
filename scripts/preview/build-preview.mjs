// Builds index.html from the static template. The brand mark is inlined as a
// data URI; gallery photographs are served from public/gallery/.
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

async function dataUri(input, transform) {
  const pipeline = transform(sharp(input));
  const buf = await pipeline.toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

const mark = await dataUri("public/brand/mark.svg", (s) =>
  s.resize({ height: 960 }).webp({ quality: 82 }),
);

let html = await readFile(path.join(root, "scripts/preview/template.html"), "utf8");
html = html.split("%%MARK%%").join(mark);

const outPath = path.join(root, "index.html");
await writeFile(outPath, html, "utf8");

const bytes = Buffer.byteLength(html, "utf8");
console.log(`Wrote ${outPath} (${(bytes / 1024).toFixed(0)} KB)`);
