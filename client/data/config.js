import Raven from 'raven-js';

const sentry_key = '31676ddc5c664665a7d19bc89937b98a';
const sentry_app = '1321793';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
