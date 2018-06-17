// In the second array:

// ARRAY 2
const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder:true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder:false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Ivy',
    age: 26,
    coder:true,
    gender: 'f',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder:true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder:false,
    gender: 'm',
    us: true,
  },
]

console.log("--- second array START--- ")
// Part 1 - List all users in the US in ascending order
const usersInUS = newieyork.filter(x => x.us)
console.log("users in US ", usersInUS)

// Part 2 - Sort all users by age
const sortedAge = newieyork.sort((x, y) => x.age - y.age)
console.log("sorted age-wise ", sortedAge)

// Part 3 - List all female coders
const femaleCoders = newieyork.filter(x => x.gender === 'f')
console.log("female coders ", femaleCoders)
console.log("--- second array END --- ")

module.exports.newieyork = newieyork;
