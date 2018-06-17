// ARRAY 1
const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
]

// Part 1 - Find all users older than 24
const usersOlderThan24 = texasss.filter(x => x.age > 24)
console.log("users older than 24 " , usersOlderThan24)

// Part 2 - Find the total age of all users
const total = texasss.reduce((acc, x) => acc + x.age, 0)
console.log("total " , total)

// Part 3 - List all female coders
const femaleCoders = texasss.filter(x => x.gender === 'f')
console.log("female coders " , femaleCoders)
