// array of number and return the sum

// let solution = 0;
// let numArr = [0, 9, 5, 12, 3];
// numArr.forEach((num) => {
//   solution += num;
// });
// console.log(`The sum of all these Nums are : ${solution}`);

//Average of an array

let arraySum = 0;
let arrayAvg = 0;
let numArray = [0, 9, 5, 12, 3];

function averageOfArray(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    arraySum += numArray[i];
  }
  //console.log(arraySum);

  arrayAvg = arraySum / numArray.length;

  console.log(arrayAvg);
}
// averageOfArray(numArray);

//Longest string

strArray = [];

function longestString(strArray) {
  let strLength = strArray[0].length;
  let longestName;

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length >= strLength) {
      strLength = strArray[i].length;
      longestName = strArray[i];
    }
  }
  console.log(longestName);
}

// longestString(["Car", "Airplane", "truck"]);

// array of strings longer than given number

let arrayOfStrings = [];

function stringLongerThan(arrayOfStrings, number) {
  let longerString = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > number) {
      longerString.push(arrayOfStrings[i]);
    }
  }

  // console.log(longerString);
}

stringLongerThan(["Moon", "Earth", "Jupiter", "Saturn", "Sun"], 4);

//Part two

let data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

let ageSum = data.reduce((a, b) => (a += Number(b.age)), 0);

console.log(ageSum);

function sortByage(a, b) {
  //console.log(data.map(age));
  return a.age - b.age;
}
let sortedArray = data.sort(sortByage);

// console.log(sortedArray);

//filter bt age

let filteredByAge = data.filter((data) => data.age <= 50);
console.log(filteredByAge);

// update occupation and increase age

// console.log("Updated");

const updatedData = data.map((data) => {
  return {
    ...data,
    job: data.occupation,
    age: parseInt(data.age) + 1,
  };
});

// console.log(updatedData);
const sumOfAges = data.reduce((x, y) => {
  return x + Number(y.age);
}, 0);

const averageAge = sumOfAges / data.length;

console.log("Sum of ages: ", sumOfAges);
console.log("Average of age: ", averageAge);
