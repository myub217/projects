import { RequestHandler } from 'express';

declare module 'connect-history-api-fallback' {
  interface Context {
    parsedUrl: {
      pathname?: string | undefined;
    };
  }

  interface Rewrite {
    from: RegExp;
    to: string | ((context: Context) => string);
  }

  interface HistoryOptions {
    rewrites?: Rewrite[];
  }

  function historyFallback(options?: HistoryOptions): RequestHandler;

  export = historyFallback;
}
