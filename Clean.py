import subprocess
import sys

def run_command(cmd):
    print(f"Running: {cmd}")
    result = subprocess.run(cmd, shell=True)
    if result.returncode != 0:
        print(f"Error running command: {cmd}")
        sys.exit(result.returncode)

def main():
    # ลบโฟลเดอร์และไฟล์ที่ต้องการ
    targets = [
        "node_modules",
        "dist",
        "package-lock.json",
        "node_modules/.vite"
    ]

    for target in targets:
        # rm -rf target
        run_command(f"rm -rf {target}")

    # ล้าง npm cache
    run_command("npm cache clean --force")

    # ติดตั้ง dependencies ใหม่
    run_command("npm install")

if __name__ == "__main__":
    main()