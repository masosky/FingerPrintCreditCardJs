const { validateCard } = require("./validators/CardValidator");

class CreditCard {
  constructor(name, surname, number, expirationDate, type, cvv) {
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.expirationDate = expirationDate;
    this.type = type;
    this.cvv = cvv;

    validateCard(number);
  }
}

module.exports = CreditCard;
