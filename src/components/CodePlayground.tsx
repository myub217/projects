import React, { useState, useMemo } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { githubLight, githubDark } from "@codesandbox/sandpack-themes";
import { useTheme } from "@/hooks/useTheme";

type CodePlaygroundProps = {
  files: Record<string, string>; // เช่น { "SalaryCertificate.tsx": "..." }
  defaultFile: string;
  title?: string;
};

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  files,
  defaultFile,
  title = "Code Viewer",
}) => {
  const { theme: userTheme } = useTheme();
  const [selectedFile, setSelectedFile] = useState(defaultFile);
  const [showPreview, setShowPreview] = useState(true);

  const theme = useMemo(
    () => (userTheme === "dark" ? githubDark : githubLight),
    [userTheme]
  );

  const selectedCode = files[selectedFile];

  return (
    <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl shadow-md max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>

        <div className="flex gap-4 items-center">
          {/* Select file */}
          <select
            aria-label="เลือกไฟล์โค้ด"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.value)}
            className="px-3 py-1 text-sm rounded-md border border-gray-300 dark:border-gray-600 dark:bg-neutral-800 dark:text-white"
          >
            {Object.keys(files).map((file) => (
              <option key={file} value={file}>
                {file}
              </option>
            ))}
          </select>

          {/* Toggle preview */}
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showPreview}
              onChange={(e) => setShowPreview(e.target.checked)}
              className="cursor-pointer"
            />
            แสดง Preview
          </label>
        </div>
      </div>

      {/* Sandpack Playground */}
      <Sandpack
        theme={theme}
        template="react-ts"
        options={{
          showTabs: true,
          showNavigator: true,
          wrapContent: true,
          showLineNumbers: true,
          autorun: showPreview,
          showPreview,
          editorHeight: 500,
        }}
        files={{
          [`/src/${selectedFile}`]: {
            code: selectedCode,
            active: true,
          },
          "/src/App.tsx": {
            code: `import Component from "./${selectedFile.replace(/\.tsx$/, "")}";

export default function App() {
  return <Component />;
}
`,
          },
          "/src/index.tsx": {
            code: `import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
`,
          },
          "/public/index.html": {
            code: `<div id="root"></div>`,
          },
        }}
      />
    </div>
  );
};

export default CodePlayground;