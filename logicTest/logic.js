let data1 = ["kiaa", "aaki", "aika", "aku", "kia", "makan", "kua"];
let data2 = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
let data3 = ["arec", "eera", "aere", "cera", "eear"];
let data4 = ["check", "check", "check", "chekk", "ccekkh"];

function anagramFunc(data) {
  let anagramWord = [];
  let alreadyUseWord = [];

  for (let i = 0; i < data.length; i++) {
    let checkUnique = checkAlreadyUseWord(data[i], alreadyUseWord);
    let tempWord = [];

    if (checkUnique) {
      tempWord = [data[i]];
      for (let j = 0; j < data.length; j++) {
        if (j != i) {
          if (data[i].length === data[j].length) {
            if (sameUniqueAlphabet(data[i], data[j])) {
              tempWord.push(data[j]);
              alreadyUseWord.push(data[j]);
            }
          }
        }
      }
    }

    if (tempWord.length > 0) {
      anagramWord.push(tempWord);
    }
  }

  return anagramWord;
}

function sameUniqueAlphabet(word, compWord) {
  let uniqueWord = [];

  for (let i = 0; i < word.length; i++) {
    let isUnique = true;
    for (let j = 0; j < uniqueWord.length; j++) {
      if (word[i] == uniqueWord[j][0]) {
        uniqueWord[j][1]++;
        isUnique = false;
      }
    }
    if (isUnique) uniqueWord.push([word[i], 1]);
  }

  for (let i = 0; i < compWord.length; i++) {
    for (let j = 0; j < uniqueWord.length; j++) {
      if (compWord[i] == uniqueWord[j][0] && uniqueWord[j][1] > 0) {
        uniqueWord[j][1]--;
      }
    }
  }

  let isAllZero = true;
  for (let i = 0; i < uniqueWord.length; i++) {
    if (uniqueWord[i][1] > 0) {
      isAllZero = false;
    }
  }

  return isAllZero;
}

function checkAlreadyUseWord(word, alreadyUseWord) {
  let isUnique = true;
  for (let i = 0; i < alreadyUseWord.length; i++) {
    if (word == alreadyUseWord[i]) {
      isUnique = false;
    }
  }

  return isUnique;
}

console.log(anagramFunc(data1));
console.log(anagramFunc(data2));
console.log(anagramFunc(data3));
console.log(anagramFunc(data4));
