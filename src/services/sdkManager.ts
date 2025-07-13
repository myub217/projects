import JSZip from "jszip";
import { writeFileSync } from "fs";
import path from "path";
import fs from "fs/promises";

const pluginId = "my-awesome-plugin";
const pluginName = "My Plugin";
const outputZipName = `${pluginId}.zip`;
const pluginDir = path.resolve(__dirname, "../../plugin-dist");

async function addFilesToZip(zip: JSZip, dir: string, rootInZip = "") {
  const items = await fs.readdir(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const zipPath = path.join(rootInZip, item.name);
    if (item.isDirectory()) {
      await addFilesToZip(zip.folder(zipPath)!, fullPath, "");
    } else {
      const content = await fs.readFile(fullPath);
      zip.file(zipPath, content);
    }
  }
}

async function createPluginZip() {
  const zip = new JSZip();
  zip.file("plugin.json", JSON.stringify({ id: pluginId, name: pluginName }));
  await addFilesToZip(zip, pluginDir);
  const content = await zip.generateAsync({ type: "nodebuffer" });
  writeFileSync(outputZipName, content);
  console.log(`✅ Plugin zip created: ${outputZipName}`);
}

createPluginZip().catch(console.error);