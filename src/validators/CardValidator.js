const InvalidNumberError = require("../errors/InvalidNumberError");
const cardValidator = require("card-validator");

class CardValidator {
  static validateCard(number) {
    const numberValidation = cardValidator.number(number);
    if (!numberValidation.isValid) {
      throw new InvalidNumberError(`Incorrect Card Number ${number}`);
    }
  }
}

module.exports = CardValidator;
