// src/types/connect-history-api-fallback.d.ts

declare module 'connect-history-api-fallback' {
  import { Middleware } from 'connect';

  interface HistoryApiFallbackOptions {
    index?: string;
    rewrites?: Array<{ from: RegExp; to: string | ((path: string) => string) }>;
    verbose?: boolean;
    disableDotRule?: boolean;
    htmlAcceptHeaders?: string[];
  }

  function historyApiFallback(
    options?: HistoryApiFallbackOptions
  ): Middleware;

  export = historyApiFallback;
}