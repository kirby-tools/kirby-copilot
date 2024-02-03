import { BrowserReporter } from "./reporter";

const REPORTER_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
};

export function createLogger(tag) {
  const reporter = new BrowserReporter();

  return new Proxy(
    {},
    {
      get(target, prop) {
        return (...args) => {
          reporter.log({
            level: REPORTER_LEVELS[prop],
            type: prop,
            tag,
            args,
          });
        };
      },
    },
  );
}
