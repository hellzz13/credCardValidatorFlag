let cardValidator = {
    getCardFlag: function (cardnumber) {
      cardnumber = cardnumber.replace(/[^0-9]+/g, "");
  
      let cards = {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard: /^5[1-5][0-9]{14}/,
        amex: /^3[47][0-9]{13}/,
        elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      };
  
      for (let flag in cards) {
        if (cards[flag].test(cardnumber)) {
          return flag;
        }
      }
  
      return false;
    },
  };
  
  // export { cardValidator };
  
  cardValidator.getCardFlag('5162 9218 5339 5554') //mastercard
  cardValidator.getCardFlag('4162 9218 5339 5554') //visa
  cardValidator.getCardFlag('3797 9208 5339 5554') //amex
  cardValidator.getCardFlag('6504 9218 5339 5554') //elo
  