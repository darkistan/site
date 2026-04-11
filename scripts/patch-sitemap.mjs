/**
 * Підставляє актуальну дату <lastmod> у sitemap після збірки (dist/sitemap.xml).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distSitemap = path.join(__dirname, "..", "dist", "sitemap.xml");

if (!fs.existsSync(distSitemap)) {
  console.warn("patch-sitemap: dist/sitemap.xml не знайдено, пропуск.");
  process.exit(0);
}

const lastmod = new Date().toISOString().slice(0, 10);
let xml = fs.readFileSync(distSitemap, "utf8");

if (/<lastmod>[\s\S]*?<\/lastmod>/.test(xml)) {
  xml = xml.replace(/<lastmod>[\s\S]*?<\/lastmod>/, `<lastmod>${lastmod}</lastmod>`);
} else {
  xml = xml.replace(
    /(<loc>https:\/\/clouds\.ua\/<\/loc>)/,
    `$1\n    <lastmod>${lastmod}</lastmod>`,
  );
}

fs.writeFileSync(distSitemap, xml, "utf8");
console.log(`patch-sitemap: lastmod=${lastmod}`);
