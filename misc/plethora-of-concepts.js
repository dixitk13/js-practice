count = 0;
// using a console.log overridden as demarkers
console.log = function() {
  count++;
  this.apply(this, ["-".repeat(10), " ", count, " ", "-".repeat(10)]);
  this.apply(this, arguments);
  this.apply(this, ["-".repeat(28), "\n\n"]);
}.bind(console.log);

var data = [{ name: "Orca", age: 12 }, { name: "Dolphin", age: 14 }];

var user = {
  data: [{ name: "Jack", age: 37 }, { name: "Jill", age: 43 }],
  printDetails: function() {
    // random number between 0 and 1
    var randomNum = ((Math.random() * 2) | 0) + 1 - 1;
    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

// #1 this printDetails is not bound to this as the user object
var printOrcaDetails = user.printDetails;
printOrcaDetails(); //shows Orca since its binded to the window context

// #2 if you want to get either of Jack/Jill, it needs to be binded
var printUserDetails = user.printDetails.bind(user);
printUserDetails();

// lets define a new object called cars
var cars = {
  data: [{ name: "Honda Accord", age: 1 }, { name: "Tesla Model3", age: 2 }]
};

// #3 Assign the printDetails method of the user object to a variable
// or Cars is borrowing the function printData from user
var printCarDetails = user.printDetails.bind(cars);
printCarDetails(); // bind to the cars object

// make a function to greet a person depending on age and gender
function greetPerson(gender, age, name) {
  var salutation = gender === "male" ? "Mr. " : "Ms. ";

  if (age > 25) {
    console.log("Hello Old " + salutation + name + ".");
  } else {
    console.log("Hey, Young " + name + ".");
  }
}

/* bind can take more arguments and do partial application to make a new function
   here greetPerson is partially applied with variables male and 45 to be able
   to greet an adult male of age 45
*/
// #4 binding a really old harry
var greetAnAdultMale = greetPerson.bind(null, "male", 26);
greetAnAdultMale("Harry");

// #5 binding a young Rita
var greetYoungFemale = greetPerson.bind(null, "female", 20);
greetYoungFemale("Rita");

// #6 without bind by using an actual partial application
var greetPartially = gender => age => name => greetPerson(gender, age, name);

var greetMale = greetPartially("male");
var greetFemale = greetPartially("female");

var greetMaleAge = greetMale(40);
var greetFemaleAge = greetFemale(19);

greetFemaleAge("Luna");
greetFemaleAge("JKR");
greetMaleAge("Hagrid");

// global variable for demo
var avg = "global";

// global function which calculates the average
function averageFun(scores) {
  // Add all the scores and return the total
  var sum = scores.reduce(function(prev, cur, index, array) {
    return prev + cur;
  });

  // The "this" keyword here will be bound to the global object, unless we set the "this" with call or apply
  this.avg = sum / scores.length;
}

// game object with scores and a null avg variable
var game = {
  scores: [20, 34, 55, 46, 77],
  avg: null
};

// If we execute the averageFun function then, "this" inside the function is bound to the global window object. so it sets the global avg rather than the game.avg
averageFun(game.scores);

// #9 the global avg variable
console.log(avg); // 46.4

// #10 but our game avg still remains null!
console.log(game.avg); // null

// lets reset the global avg variable
avg = "global";

// To set the "this" value explicitly, so that "this" is bound to the game object,
// We use the method call(thisVar, listOfArgs)
averageFun.call(game, game.scores);

// #11 checking the avg variable
console.log(avg); // global

// #12 checking the game object's avg variable
console.log(game.avg); // 46.4

// lets reset the global avg variable and game object
avg = "global";
game.avg = null;

// this time using the bind method for doing the same thing
var sum = averageFun.bind(game);
sum(game.scores);

// #13 checking the avg variable
console.log(avg); // global

// #14 checking the game object's avg variable
console.log(game.avg); // 46.4

// another example for the same thing?

var person = {
  id: 94545,
  fullName: null,
  // setFullName is a method on the person object
  setFullName: function(firstName, lastName) {
    // this refers to the fullName property in this object
    this.fullName = firstName + " " + lastName;
  }
};

function getUserInput(firstName, lastName, callback, callbackObj) {
  // The use of the apply method below will set the "this" value to callbackObj
  callback.apply(callbackObj, [firstName, lastName]);
}
// The clientData object will be used by the Apply method to set the "this" value
getUserInput("Steve", "Jobs", person.setFullName, person);

// #15 the fullName property on the clientData was correctly set
console.log(person.fullName); // Steve Jobs

var employee = {
  salaries: [20, 34, 55, 46, 77],
  avgSalary: null,
  sons: [
    { name: "Tommy", sonID: 987, age: 23 },
    { name: "Pau", sonID: 87, age: 10 }
  ]
};

var company = {
  salaries: [900, 845, 809, 950],
  avgSalary: null,
  avg: function() {
    var sum = this.salaries.reduce(function(prev, cur, index, array) {
      return prev + cur;
    });
    this.avgSalary = sum / this.salaries.length;
  }
};

// We are using the apply method, so from the company's avg function we use it to apply to employee and the 2nd argument has to be an array
company.avg.apply(employee);

// #16 lets check employee's salary which got calculated by borrowing the avg func
console.log(employee.avgSalary); // 46.4

// # 17 company.avgSalary still null, it was never updated,
console.log(company.avgSalary); // null

// lets add another function to employee
employee.calcMax = function() {
  this.maxSalary = Math.max.apply(null, this.salaries);
};

// lets apply this avg calculations to the employee object now
employee.calcMax.apply(employee, employee.salaries);

// # 18 what the max salary?
console.log(employee.maxSalary); // 77
