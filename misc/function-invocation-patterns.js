// 1. constructor invocation pattern
// uses the new operator to create instance 
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
};

const adam = new Person('Adam', 'male');

console.log(adam); // Person { name: 'Adam', gender: 'male' }


// 2. call/apply invocation pattern
// call function calls with the emp1 as the this value

const employee = function() {
  console.log('this ', this); // this  { name: 'Simple Man', salary: 'Zero' }
  console.log(this.name);
};

const emp1 = {
  name: 'Simple Man',
  salary: 'Zero'
};

employee.call(emp1); // Simple Man
// employee.apply(emp1);

// 3. method invocation pattern 
// the drive method relies on the object here
const car = {
  wheels: 4,
  electric: false,
  drive() {
    console.log(`Its ${this.electric ? 'Electric' : 'Non-electric'} with wheels=${this.wheels}`)
  }
}

car.drive() // Its Non-electric with wheels=4


// 4. Function invocation pattern: calling simple function 

const hello = function(message) {
  console.log(message);
};

hello('Hello Crazy Person');
