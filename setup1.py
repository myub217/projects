import os
import subprocess

def run(cmd):
    print(f"\n👉 {cmd}")
    subprocess.run(cmd, shell=True, check=True)

def main():
    print("🚀 เริ่มรีเซ็ตและตั้งค่าสภาพแวดล้อม Vite + React ใหม่...")

    # ล้าง cache และโฟลเดอร์ build
    run("rm -rf node_modules dist .vite .cache")
    run("npm cache clean --force")

    # ติดตั้ง Node.js LTS หากยังไม่ได้ลง (เฉพาะใน Termux)
    if os.path.exists("/data/data/com.termux/files/usr/bin/pkg"):
        print("📦 ตรวจพบ Termux – ติดตั้ง nodejs-lts")
        run("pkg install -y nodejs-lts")

    # ติดตั้ง corepack และ enable yarn (optional)
    run("npm install -g corepack")
    run("corepack enable")

    # ติดตั้ง vite ทั่วไป (global)
    run("npm install -g vite")

    # ติดตั้ง dependencies ของโปรเจกต์ปัจจุบัน
    run("npm install")

    # สร้าง build production (เพื่อเทียบ)
    run("npm run build")

    # ทดสอบ preview (ใช้ --host เพื่อเข้าผ่านมือถือได้)
    print("\n✅ เปิดตัวอย่างผ่าน: http://localhost:4173")
    print("⏳ กด Ctrl+C เพื่อหยุด preview ได้ทุกเมื่อ\n")
    run("npx vite preview --host")

if __name__ == "__main__":
    try:
        main()
    except subprocess.CalledProcessError:
        print("❌ เกิดข้อผิดพลาดระหว่างการรันคำสั่ง กรุณาตรวจสอบและลองใหม่อีกครั้ง")