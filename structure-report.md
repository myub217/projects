<!doctype html>
<html lang="th">
  <head>
    <!-- Meta พื้นฐาน -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#2563eb" />
    <meta name="description" content="JPDocs ระบบแสดงผลใบรับรอง เอกสารสำคัญ และจัดการข้อมูลแบบ PWA บนมือถือและเดสก์ท็อป" />
    <meta name="keywords" content="JPDocs, ใบรับรอง, เอกสาร, ระบบแสดงผล, PWA, รับรอง, Certificate, ระบบอัจฉริยะ" />
    <meta name="author" content="JP Team" />
    <meta name="robots" content="noindex, nofollow" />

    <title>JP Visual & Docs</title>

    <!-- PWA Support -->
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="JPDocs" />

    <!-- Icons -->
    <link rel="icon" href="/logo.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/images/icon-192.png" />
    <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml" />

    <!-- Dev Mode: Vite จะ inject CSS/JS อัตโนมัติ -->
    <script type="module" src="/src/main.tsx"></script>

    <!-- iOS Splash background -->
    <style>
      html, body {
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      }
    </style>

  </head>
  <body>
    <noscript>กรุณาเปิดใช้งาน JavaScript เพื่อใช้งานระบบ JPDocs</noscript>
    <div id="root"></div>

    <!-- Service Worker (Dev หรือ Build mode จะ auto-register) -->
    <script type="module" src="/registerSW.js" defer></script>

  </body>
</html>
