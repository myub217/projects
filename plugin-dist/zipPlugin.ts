 import JSZip from "jszip";
import { writeFileSync } from "fs";

const zip = new JSZip();
zip.file("plugin.json", JSON.stringify({ id: "my-awesome-plugin", name: "My Plugin" }));
zip.file("main.js", "// your plugin JS here");

zip.generateAsync({ type: "nodebuffer" }).then((content) => {
  writeFileSync("my-awesome-plugin.zip", content);
});
