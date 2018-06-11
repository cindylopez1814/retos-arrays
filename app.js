const computeAverageLengthOfWords = (word1, word2) => (word1.length + word2.length)/2;
// 
const convertDoubleSpaceToSingle = (str) => str = str.split("  ").join(" ");
//
const areValidCredentials = (name, password) => {
  if (name.length > 3 && password.length > 8){
    return true;
  }
  else return false;
}
//
const filterOddElements = (arr) => {
  const evenNumbers = arr.filter(element => element % 2 !== 0);
  return evenNumbers;
}
//
const computeSumOfAllElements = (arr) => {
    const newNumbers = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return newNumbers;
}
//
const getNthElement = (array, n) => {
  if (array === 0){
    return undifined;
  } else {
    return array[n];
  }
}
//
const findPairForSum = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    for(let index = 0; index < array.length; index++) {
      if (array[i] + array[index] === number){
      return [array[i],array[index]];
      }
    }
  }
}

