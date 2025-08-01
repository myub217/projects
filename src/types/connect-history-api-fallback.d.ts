<<<<<<< HEAD
// ✅ src/types/connect-history-api-fallback.d.ts – เวอร์ชันสมบูรณ์ พร้อมใช้งานจริง

declare module 'connect-history-api-fallback' {
  import { NextHandleFunction } from 'connect';

  interface Rewrite {
    from: RegExp;
    to: string | ((context: { parsedUrl: URL; match: RegExpMatchArray }) => string);
  }

  interface HistoryApiFallbackOptions {
    index?: string; // ค่า default file เช่น "/index.html"
    rewrites?: Rewrite[]; // custom rewrite rules
    verbose?: boolean; // แสดง log debug ใน console
    disableDotRule?: boolean; // รองรับ URL ที่มี . เช่น /file.js
    htmlAcceptHeaders?: string[]; // เงื่อนไขของ Accept header
  }

  function historyApiFallback(options?: HistoryApiFallbackOptions): NextHandleFunction;
=======
// src/types/connect-history-api-fallback.d.ts

declare module "connect-history-api-fallback" {
  import { RequestHandler } from "express";

  interface HistoryApiFallbackOptions {
    readonly verbose?: boolean;
    readonly disableDotRule?: boolean;
    readonly htmlAcceptHeaders?: string[];
    readonly rewrites?: Array<{
      from: RegExp;
      to:
        | string
        | ((context: { parsedUrl: URL; match: RegExpMatchArray }) => string);
    }>;
    readonly index?: string | ((req: Request) => string);
  }

  const historyApiFallback: (
    options?: HistoryApiFallbackOptions,
  ) => RequestHandler;
>>>>>>> bbe22dc9 (update)

  export = historyApiFallback;
}
