function computeAverageLengthOfWords(word1, word2) {
  // your code here
  word1 = word1.length;
  word2 = word2.length;
  
  let promedio = (word1 + word2)/2;
  return promedio;
}

// 
function convertDoubleSpaceToSingle(str) {
  // your code here
  str = str.split("  ");
  return str.join(" "); 
}

//
function areValidCredentials(name, password) {
  // your code here
  if (name.length > 3 && password.length > 8){
    return true;
  }
  else return false;
}

//
function filterOddElements(arr) {
  // your code here
  const evenNumbers = arr.filter(element => element % 2 !== 0);
  return evenNumbers;
}

//
function computeSumOfAllElements(arr) {
  // your code here
    const newNumbers = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return newNumbers;
}
//

