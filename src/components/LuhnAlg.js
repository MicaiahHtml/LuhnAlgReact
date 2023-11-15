export default function LuhnAlg(cardNum) {
  let cardArr = cardNum.split("");
  let isCardNumACard;
  let cardSum = 0;
  if (cardArr.length < 1) return false;
  for (let item of cardArr) {
    if (item == " ") {
      cardArr.splice(cardArr.indexOf(item), 1);
    }
    if (isNaN(item)) {
      //alert("FALSE");
      return false;
    }
  }
  for (let i = cardArr.length - 2; i >= 0; i -= 2) {
    cardArr[i] *= 2;
  }

  let tempString = cardArr.toString().replace(/,/g, "");
  cardArr = tempString.split("");
  console.log("Before: " + cardArr);

  cardArr.forEach((num) => {
    cardSum += parseInt(num);
  });
  console.log("After: " + cardSum);
  //alert(cardSum % 10);
  if (cardSum % 10 == 0) {
    return true;
  } else {
    return false;
  }
  //alert(cardArr);
}
