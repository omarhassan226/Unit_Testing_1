// Fn_1
export function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = n * (n + 1) / 2;
  const arrSum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - arrSum;
}

// Fn_2
export function calculateExpression(expression) {
  return eval(expression);
}

// Fn_3
export const fibonacci = (num) => {
  let n1 = 0,
    n2 = 1
  for (let i = n1; i <= num; i++) {
    console.log(n1);
    let next = n1 + n2
    n1 = n2
    n2 = next
  }
}

// Fn_4
export const capitalizeWords = (sentence)=>{
  return sentence.split(' ').map((word)=> word[0].toUpperCase() + word.slice(1)).join(' ')
}

// Fn_5
export const sortNestedArray = (arr) => {
  return arr.flat().sort((a, b) => a - b)
}

// Fn_6
export const reverseSentenceWords = (sentence)=>{
  return sentence.split(" ").reverse().join(" ")
}

// Fn_7
export const mergeDistinctArrays = (arr1, arr2) => {
  const Arr3 = [...arr1, ...arr2]
  const newArr = []
  Arr3.forEach((ele) => {
    if (!newArr.includes(ele)) {
      newArr.push(ele)
    }
  })
  return newArr
}

// Fn_8
export const calculateAge = (d, m, y) => {
  let dateNow = new Date().toLocaleString();
  let [day, month, year] = [...dateNow.slice(0, 10).split("/")];
  let years = year - y;
  let months = month - m;
  let days = day - d;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (days < 0) {
    months -= 1;
    days += 30;
  }
  return `You have ${years} years, ${months} Months and ${days} days`;
};

// Fn_9
export const longestString = (str) => {
  let arr = []
  let myArr = []
  let len = 0
  let max = 0

  str.split('').forEach((ele, i) => {
    if (!arr.includes(ele)) {
      arr.push(ele)
      if (str.length - 1 == i) {
        myArr[len] = [...arr]
      }
    } else {
      myArr[len] = [...arr]
      len++
      arr = []
      arr.push(ele)
    }
  })
  for (let i = 0; i < myArr.length; i++) {
    max = myArr[i].length > max ? i : max
  }
  return myArr[max].join('')
}

// Fn_10
export const getSumOfRandom = (num)=>{
  let result = 0
  for(let i = 0; i<= num; i++){
    result += Math.floor(Math.random() * num)
  }
  return result
}
