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
