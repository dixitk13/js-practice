/**
 * Inspired from https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e
 */
const myFavouriteAuthors = {
  allAuthors: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett'
    ],
  },
  [Symbol.iterator]() {
    // Get all the authors in an array
    const values = Object.values(this.allAuthors);

    // Store the current genre and author index
    let currentKeyIndex = 0;
    let currentValueIndex = 0;

    return {
      // Implementation of next()
      next() {

        const currentValArray = values[currentValueIndex];

        if (!(currentKeyIndex < currentValArray.length)) {
         // reset
         currentValueIndex++;
         currentKeyIndex = 0;
        }


        if (!(currentValueIndex < values.length)) {
          return {
            value: undefined,
            done: true
          };
        }

        return {
          value: values[currentValueIndex][currentKeyIndex++],
          done: false
        }
      }
    };
  }
};

for (const author of myFavouriteAuthors) {
  console.log(author);
}

console.log(...myFavouriteAuthors)
console.log([...myFavouriteAuthors].length)
