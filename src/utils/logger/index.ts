export class Logger {
  static info(message: string): void {
    // eslint-disable-next-line no-console
    console.info(message);
  }

  static error(message: unknown, data?: unknown): void {
    // collect errors data anywhere else, e.g in Sentry
    // eslint-disable-next-line no-console
    data ? console.error(message, data) : console.error(message);
  }
}
