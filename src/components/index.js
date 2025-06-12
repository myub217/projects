import React from "react";

const LINE_LINK = "https://line.me/ti/p/@462FQTFC";
const FACEBOOK_LINK = "https://www.facebook.com/yourpage";

export default function Header() {
  return (
    <header>
      {/* ... เนื้อหาอื่น ๆ ... */}
      <p className="text-center mt-4 text-sm">
        ติดต่อเราได้ที่ LINE ID:{" "}
        <a
          href={LINE_LINK}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @462FQTFC
        </a>
        <br />
        หรือเยี่ยมชม Facebook Page:{" "}
        <a
          href={FACEBOOK_LINK}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          JP Visual & Docs
        </a>
      </p>
      {/* ... เนื้อหาอื่น ๆ ... */}
    </header>
  );
}