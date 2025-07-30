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

  export = historyApiFallback;
}
