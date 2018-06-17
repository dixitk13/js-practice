const { texasss } = require('./first-array.js')
const { newieyork } = require('./second-array.js')

// ARRAY 3
const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder:true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder:true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder:false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder:true,
    gender:'f'
  },
  {
    name: 'Jon',
    age: 47,
    coder:false,
    gender: 'm',
  },
]

console.log("--- third array START--- ")

const all = [...texasss, ...vegzas, ...newieyork]
// Part 1 - Find the total age of male coders under 25
const totalAgeMaleCodersUnder25 =
          vegzas.reduce((acc, x) => acc + ((x.age < 25 && x.gender === 'm') ? x.age : 0), 0)
console.log("total age of male coders under 25 = ", totalAgeMaleCodersUnder25)

// Part 2 - List all male coders over 30
const allMaleCodersOver30 = vegzas.filter((x) => x.gender === 'm' && x.age < 25)
console.log("total age of male coders undexr 25 = ", allMaleCodersOver30)


// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
const totalAge = all.reduce((acc, x) => acc + x.age, 0)

console.log("--- third array END --- ")
