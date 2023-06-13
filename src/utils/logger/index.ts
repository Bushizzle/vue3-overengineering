export class Logger {
	static info(message: string): void {
		console.info(message);
	}
	static error(message: unknown, data?: any): void {
		// collect errors data anywhere else, e.g in Sentry
		data ? console.error(message, data) : console.error(message);
	}
}