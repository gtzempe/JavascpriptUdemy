// const country = 'Greece'
// const continent = 'Athens'
// let population = 10

// console.log(country)
// console.log(continent)
// console.log(population)

// const isIsland = false
// let language

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)

// language = 'Greek'

// // population = 10 / 2
// // population = 10 + 1
// // console.log(population)

// if (population > 33) {
//   console.log(`${country} 's population is above average`)
// } else {
//   console.log(
//     `${country} 's population is ${33 - population} million below average`
//   )
// }

// const numNeighbours = prompt(
//   'How many neighbour countries does your country have?'
// )

const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
)

if (numNeighbours === 1) {
  console.log('Only 1 border!')
} else if (numNeighbours > 1) {
  console.log('More than 1 border!')
} else {
  console.log('No borders')
}
