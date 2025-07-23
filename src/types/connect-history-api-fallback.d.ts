// ✅ src/types/connect-history-api-fallback.d.ts – เวอร์ชันสมบูรณ์ พร้อมใช้งานจริง

declare module 'connect-history-api-fallback' {
  import { NextHandleFunction } from 'connect'

  interface Rewrite {
    from: RegExp
    to: string | ((context: { parsedUrl: URL; match: RegExpMatchArray }) => string)
  }

  interface HistoryApiFallbackOptions {
    index?: string // ค่า default file เช่น "/index.html"
    rewrites?: Rewrite[] // custom rewrite rules
    verbose?: boolean // แสดง log debug ใน console
    disableDotRule?: boolean // รองรับ URL ที่มี . เช่น /file.js
    htmlAcceptHeaders?: string[] // เงื่อนไขของ Accept header
  }

  function historyApiFallback(options?: HistoryApiFallbackOptions): NextHandleFunction

  export = historyApiFallback
}
