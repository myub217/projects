import os

COMPONENTS_DIR = "src/components"
INDEX_FILE = "src/index.tsx"
COMPONENTS_EXPORT_FILE = os.path.join(COMPONENTS_DIR, "index.ts")

def move_index_tsx_files():
    for item in os.listdir(COMPONENTS_DIR):
        path = os.path.join(COMPONENTS_DIR, item)
        index_tsx = os.path.join(path, "index.tsx")
        if os.path.isdir(path) and os.path.isfile(index_tsx):
            new_file = os.path.join(COMPONENTS_DIR, f"{item}.tsx")
            print(f"Moving {index_tsx} → {new_file}")
            os.rename(index_tsx, new_file)
            os.rmdir(path)

def create_components_export():
    exports = []
    for f in os.listdir(COMPONENTS_DIR):
        if f.endswith(".tsx") and f != "index.ts":
            name = os.path.splitext(f)[0]
            exports.append(f"export {{ default as {name} }} from './{name}';")
    with open(COMPONENTS_EXPORT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(exports))
    print(f"Created {COMPONENTS_EXPORT_FILE}")

def fix_index_import():
    if not os.path.isfile(INDEX_FILE):
        print(f"{INDEX_FILE} not found! Please fix manually.")
        return
    with open(INDEX_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    # แก้ import ให้ใช้แบบ import { Header, Features, Footer } from './components'
    import_line = "import { Header, Features, Footer } from './components';"
    # แทนที่ import component เดิมแบบแยกไฟล์
    content = "\n".join([import_line] + [line for line in content.splitlines() if not line.strip().startswith("import ")])
    with open(INDEX_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Fixed imports in {INDEX_FILE}")

if __name__ == "__main__":
    move_index_tsx_files()
    create_components_export()
    fix_index_import()
    print("Project structure organized successfully.")