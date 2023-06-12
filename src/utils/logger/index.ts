export class Logger {
	static info(message: string): void {
		console.info(message);
	}
	static error(message: unknown): void {
		// collect errors data anywhere else, e.g in Sentry
		console.error(message);
	}
}