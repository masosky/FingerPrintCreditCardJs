class InvalidNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidNumberError";
  }
}

module.exports = InvalidNumberError;
