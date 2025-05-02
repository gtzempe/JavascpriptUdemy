'use strict'

// let hasDriverLicense = false
// const passTest = true

// if (passTest) hasDriverLicense = true
// if (hasDriverLicense) console.log('i can drive')

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges)
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice
// }

// const appleJuice = fruitProcessor(2, 5)
// console.log(appleJuice)

// function describeCountry(country, population, capitalCity) {
//   const description = `${country} has ${population} million people and its capital city is ${capitalCity}'.`
//   return description
// }

// const Greece = describeCountry('Greece', 10, 'Athens')
// const France = describeCountry('France', 50, 'Paris')
// const Germany = describeCountry('Germany', 83, 'Munchen')

// // console.log(Greece)
// // console.log(France)
// // console.log(Germany)

// // console.log(Greece, France, Germany)

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100
// }

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100
// }

// const Greece = percentageOfWorld1(10)
// const France = percentageOfWorld1(50)
// const Germany = percentageOfWorld1(83)

// console.log('The world `s population is: ' + Greece)
// console.log('The world `s population is: ' + France)
// console.log('The world `s population is: ' + Germany)

// const percentageOfWorld3 = (population) => (population / 7900) * 100

// const Greece = percentageOfWorld3(10)
// const France = percentageOfWorld3(50)
// const Germany = percentageOfWorld3(83)

// console.log('The world `s population is: ' + Greece)
// console.log('The world `s population is: ' + France)
// console.log('The world `s population is: ' + Germany)

// const percentageOfWorld = function (populationPercentage) {
//   return (populationPercentage / 7900) * 100
// }

// const describePopulation = (country, population) => {
//   const percentage = percentageOfWorld(population)

//   const description = `${country} has ${population} million people, which is about ${percentage.toFixed(
//     2
//   )}% of the world.`
//   return description
// }

// const Greece = describePopulation('Greece', 10)
// const France = describePopulation('France', 50)
// const Germany = describePopulation('Germany', 83)

// console.log(Greece)
// console.log(France)
// console.log(Germany)

// const calcAverage = (score1, score2, score3) => {
//   const average = (score1 + score2 + score3) / 3
//   return average
// }

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)

// // const scoreDolphins = calcAverage(85, 54, 41)
// // const scoreKoalas = calcAverage(23, 34, 27)

// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > avgKoalas && avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)
//   } else if (avgDolphins < avgKoalas && avgDolphins * 2 < avgKoalas) {
//     console.log(`Koalas win ${avgDolphins} vs ${avgKoalas}`)
//   } else {
//     console.log('No team wins')
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas)

// const populations = [10, 25, 83, 48]

// console.log(populations.length === 4)

// // if (populations.length === 4) {
// //   console.log('Array has 4 elements.')
// // } else {
// //   console.log('No it hasnt')
// // }

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100
// }

// const percentages = [
//   percentageOfWorld1(populations[0]).toFixed(2),
//   percentageOfWorld1(populations[1]).toFixed(2),
//   percentageOfWorld1(populations[2]).toFixed(2),
//   percentageOfWorld1(populations[3]).toFixed(2)
// ]
// console.log(percentages)

// const calcTip = (bill) => {
//   let tip = 0
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15
//   } else {
//     tip = bill * 0.2
//   }
//   return tip
// }

// console.log(calcTip(100))

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills)
// console.log(tips)
// console.log(totals)

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// )

// console.log(
//   'Jonas has ' +
//     jonas.friends.length +
//     ' friends, and his best friend is called ' +
//     jonas.friends[0]
// )

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah
//     return this.age
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he ${
//       this.hasDriversLicense ? 'has' : 'has not'
//     } a driver's license.`
//   }
// }

// console.log(jonas.getSummary())

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   bmi: null,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height)
//     return this.bmi
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   bmi: null,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height)
//     return this.bmi
//   }
// }

// mark.calcBMI()
// john.calcBMI()

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
//       john.fullName
//     }'s 😵‍💫 (${john.bmi.toFixed(1)})`
//   )
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
//       mark.fullName
//     }'s 🙄 (${mark.bmi.toFixed(1)})`
//   )
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// // console.log(dice)

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
//   if (dice === 6) console.log('Loop is about to end...')
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i])
  totals[i] = bills[i] + tips[i]
}

console.log(tips)
console.log(totals)

const calcAverage = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(calcAverage(totals))
