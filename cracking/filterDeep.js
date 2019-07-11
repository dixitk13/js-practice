/**
 * Given an object and a filter function, write a function that will go through and 
 * filter the object, then return a filtered object

Example 1
Input Object

{
  a: 1,
  b: {
   c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  }
Input Function
const filter = (n) => n >= 0

Output

{ a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
Example 2

Input Object

{
  a: 1,
  b: {
    c: 'Hello World',
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: 'Good Night Moon',
  },
}
Input Function
const filter = (s) => typeof s === 'string'

Output

{ b: { c: 'Hello World', h: 'Good Night Moon' } } 
 */

let obj1 = {
    a: 1,
    b: {
        c: 2,
        d: -3,
        e: {
            f: {
                g: -4,
            },
        },
        h: {
            i: 5,
            j: 6,
        },
    }
}


let obj2 = {
    a: 1,
    b: {
        c: 'Hello World',
        d: 2,
        e: {
            f: {
                g: -4,
            },
        },
        h: 'Good Night Moon',
    },
}

function myEmpty(obj) {
    return typeof (obj) === 'object' &&
        Object.keys(obj).length === 0;
}


let filterDeep = (obj, filterFun) => {
    let res = {}
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            let innerObj = filterDeep(obj[key], filterFun)
            if (!myEmpty(innerObj)) {
                res[key] = innerObj
            }
        } else if (filterFun(obj[key])) {
            res[key] = obj[key]
        }
    }
    return res
}

console.log(filterDeep(obj1, (n) => n >= 0))
console.log(filterDeep(obj2,
    (s) => typeof s === 'string'))
