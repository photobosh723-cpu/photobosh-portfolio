import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const backupDir = path.resolve("../photobosh-originals");

const extensions = new Set([".jpg", ".jpeg", ".png"]);

async function getFiles(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await getFiles(publicDir);

const imageFiles = files.filter((file) =>
  extensions.has(path.extname(file).toLowerCase())
);

console.log(`Found ${imageFiles.length} images.`);

for (const input of imageFiles) {
  const relativePath = path.relative(publicDir, input);

  // Backup original
  const backupPath = path.join(backupDir, relativePath);
  await fs.promises.mkdir(path.dirname(backupPath), { recursive: true });
  await fs.promises.copyFile(input, backupPath);

  // Convert to WebP
  const output = input.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  await sharp(input)
    .rotate()
    .resize({
      width: 2560,
      height: 2560,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 90,
      effort: 6,
    })
    .toFile(output);

  // Remove original from project
  await fs.promises.unlink(input);

  console.log(`✓ ${relativePath}`);
}

console.log("\nDone.");
console.log(`Originals backed up to: ${backupDir}`);