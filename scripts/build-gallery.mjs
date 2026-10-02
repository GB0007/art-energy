import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const src = "documents/art&energy/source/IMG_4280.jpg"; // 1200 x 1600
const outDir = "public/gallery";

await mkdir(outDir, { recursive: true });

// Full sheet, web-optimized.
await sharp(src)
  .resize({ width: 1100 })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(outDir, "mapping-full.jpg"));

// Detail crops focused on the watercolor clusters (keeps private handwriting out of frame).
const crops = [
  { name: "detail-bloom.jpg", left: 288, top: 24, width: 604, height: 520 },
  { name: "detail-field.jpg", left: 170, top: 560, width: 628, height: 540 },
  { name: "detail-ember.jpg", left: 300, top: 984, width: 700, height: 540 },
];

for (const c of crops) {
  await sharp(src)
    .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
    .resize({ width: 900 })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(outDir, c.name));
}

// The five-energies watercolor mark as a gallery piece.
await copyFile("public/brand/mark-circular.png", path.join(outDir, "five-energies.png"));

console.log("gallery assets written to", outDir);
