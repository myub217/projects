const plugin = {
  id: "my-awesome-plugin",
  name: "My Awesome Plugin",
  version: "1.0.0",
};

let sdk;
let logger;

function main(acode) {
  sdk = acode.require("acode.sdk");
  logger = sdk.getLogger(plugin.id);

  logger.info("✅ Plugin loaded: " + plugin.name);

  // ตัวอย่าง: เพิ่ม event listener
  // sdk.editorManager.editor.addEventListener("change", () => {
  //   logger.info("Editor content changed");
  // });
}

function destroy() {
  logger.info("🧹 Plugin unloaded: " + plugin.name);
  // ทำความสะอาด event หรือ resource ที่ผูกไว้
  // sdk.editorManager.editor.removeEventListener(...)
}

if (window.acode) {
  main(acode);
} else {
  const handler = ({ detail }) => {
    if (detail.name === "acode.sdk") {
      main(acode);
      document.removeEventListener("plugin.install", handler);
    }
  };
  document.addEventListener("plugin.install", handler);
}

export { main, destroy };