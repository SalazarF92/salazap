export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }

  throwError() {
    throw this;
  }
  getError() {
    return {
      statusCode: this.statusCode,
      message: this.message,
    };
  }
}
