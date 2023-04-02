'use strict';

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.88;

// const BMIMark = massMark / (heightMark ** 2)

// const BMIJohn = massJohn / (heightJohn ** 2)

// if (BMIMark > BMIJohn) {
//   console.log("Mark is tall");
// }
// else {
//   console.log("John is tall")
// }

// {
// const canGetDrivingLicense = (age) => {
//   const oldAge = age >= 18;
//   if (oldAge) {
//     alert("You can started driving license")
//   }
//   else {

//      alert("You can't started driving license")
//   }

// }

// console.log(canGetDrivingLicense(19))

// }

// const inputValue = "1991";
// const agree = +inputValue + 18;

// console.log(agree)

// const dolphins = [96, 108, 89];

// const resultMidleDolphins = dolphins.reduce((prev, next) => {
//   return prev += next / dolphins.length;

// }, 0)

// const koals = [88, 91, 110];

// const resultMidleKoals = koals.reduce((prev, next) => {
//   return prev += next / dolphins.length;

// }, 0)

// if (resultMidleDolphins > resultMidleKoals && resultMidleDolphins > resultMidleKoals >= 100) {
//   console.log("dolphins are win ")
// }
// else if (resultMidleDolphins === resultMidleKoals ) {
//   console.log("ooo it's draw")
// }
// else if (resultMidleDolphins < resultMidleKoals && resultMidleDolphins > resultMidleKoals >= 100){
//   console.log("Koals win")
// }
// else {
//   console.log("anybody no win")
// }

// console.log(resultMidleDolphins)
// console.log(resultMidleKoals)

// const calcAverage = (...values) => {

//   const result = values.reduce((prevItem, nextItem) => {
//     return prevItem += nextItem / values.length
//   }, 0)
//   return result;
// }

// console.log(calcAverage(112,2,3))

// console.log(tips)

// console.log(calcAverage(12, 3, 45));

// const middleTeams = (arrCoalsPoint, arrJuniorPoint) => {
//   const middleCoals = calcAverage(arrCoalsPoint)
//   const middleJuniors = calcAverage(arrJuniorPoint)

//   if (middleCoals > middleJuniors) {
//     console.log("Coals are win")

//   } else if (middleCoals === middleJuniors) {
//     console.log("ooo it's draw ")

//   } else {
//     console.log("Junior are win")

//   }

// }

// middleTeams(112, 3, 45);

// let bill = 275;

// if (price > 50 && price < 300 ) {
//   tip = 15;
// }
// else {
//   tip = 20
// }

// let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// console.log(tip + bill)

// const combPiesesFruit = (fruit) =>  {
//    return fruit * 2;
// }

// const combFruit = (apple, orange) => {
//   const applePieces = combPiesesFruit(apple);
//   const piecesOrange = combPiesesFruit(orange);
//   const result = `add ${applePieces} apple ${piecesOrange} orange`
//   return result
// }

// // const combPiesesFruit = (fruit) => {
// //   return fruit * 2;
// // }

// console.log(combFruit(2, 3))
// const calkAge = (year) => {
//   return 2023 - year;
// }

// const countAgeForRetirement = (firstName, birthdayYear) => {
//   const age = calkAge(birthdayYear);
//   const result =  65 - age
//    return `${firstName} ostalos do pensii ${result}`

// }

// console.log(countAgeForRetirement("Roman", 1996))
/////////////////
//задача про чаевые
// const bills = [125, 555, 44]

// const calcTip = (bill) => {

//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// }

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills,tips,totals)

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1996,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   callAge: function () {
//     this.year = 2023-this.birthYear
//     return this.year
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.year}-year old ${this.job} and he ${jonas.hasDriversLicense ? "has " : "no " + " " }  driver license`
//   }
// };

// console.log(jonas.callAge())
// console.log(jonas.year)
// console.log(jonas.getSummary())

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {

//     this.bmi = this.weight / (this.height ** 2)
//     return this.bmi;
//   }
// }

// const john = {
//   firstName: "John",
//   lastName: "Smit",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / (this.height ** 2)
//     return this.bmi
//   }
// }

// console.log(john.calcBMI())
// console.log(john.bmi)
// console.log(mark.bmi)
// console.log(mark.calcBMI())
// console.log(mark)

// if (john.bmi > mark.bmi) {
//   console.log(`${john.firstName} ${john.lastName} ${john.bmi} 'cool you are very tall'`)

// } else if (mark.bmi > john.bmi) {
//   console.log(`${mark.firstName} ${mark.lastName} BMI ${mark.bmi}  cool you are very tall`)
// } else {
//   return
// }

// let newArray = [];
// const jonasArray = [
//   "Jonas",
//   "Smidtman",
//   2023 - 1996,
//   "teacher",
//   ["Michael", "Steven", "Bobster"],
//   true
// ];

// for (let i = 0; i < jonasArray.length; i++){

//   console.log(jonasArray[i])
//   if (typeof jonasArray[i] !== "string") continue;
//   // newArray.push(typeof jonasArray[i])

//   console.log(jonasArray[i], typeof jonasArray[i])
// }

// const year = [1996, 1998, 2003, 2007]
// const ages = [];

// for (let i=year.length-1; i>=0;  i--){
//   console.log( i, year[i])
// }

// const arrayExercise = [
//   "otjimaniya",
//   "pordtygivaniya",
//   "prisedaniya"
// ];

// for (let i = 0; i < arrayExercise.length; i++){
//   console.log(arrayExercise[i])
//   if (arrayExercise[i] === arrayExercise[0]) {
//     for (let j = 0; j < 3; j++){
//       console.log(arrayExercise[i])
//     }

// }

// for (let exersice = 1; exersice <= 3; exersice++){
//   console.log(`----starting ${exersice}`)
//   for (let i = 1; i <= 5; i++) {
//     console.log(`left weihht repetition ${i}`)
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(rep)
//   rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !==6) {
//   console.log(dice)
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is ended")
//   }
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// let aver;

// const calcAverage = (arr) => {
//   console.log(arr);
//   aver = arr.reduce((prev, next) => {
//     return (prev += next / arr.length);
//   }, 0);
//   return aver;
// };

// const readyProg = (bills) => {
//   for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
//   }
//   return totals;
// };
// const totalsAll = readyProg(bills);

// console.log(calcAverage(totalsAll));
// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const diffTemperature = [2, 6, 7, 11, 3, 13, 8, 0, -9, -2];
// const calkTempAmplitude = (temps1, temps2) => {
//   // const temps = [...temps1, ...temps2];
//   const temps = temps1.concat(temps2);

//   let maxTemp = temps[0];
//   let minTemp = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > maxTemp) maxTemp = curTemp;
//     if (minTemp > curTemp) minTemp = curTemp;
//   }
//   console.log(`Max temp  ${maxTemp}, Min temp ${minTemp}`);
//   return maxTemp - minTemp;
// };

// const amplitude = calkTempAmplitude(temperature, diffTemperature);
// console.log(amplitude);
// console.log(calkTempAmplitude(temperature));

// const measureKelvin = () => {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: +prompt('Degrees celsius'),
//   };
//   console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());
// const data1 = [17, 21, 23];
// const data2 = [12, 5, 0, 4];

// const printForecast = (arr) => {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `...${arr[i]} C in days ${i + 1} `;
//   }

//   return str;
// };

// console.log(printForecast(data2));
