// JS support constructors through the use of a “new” keyword prefixed to a function call. 

function Person(name, address, alive) {
	this.name = name;
	this.address = address;
	this.alive = alive || false; // undefined == false?

	this.isAlive = function () {
		return "DOA = " + this.alive;
	}
}

var p1 = new Person('apple', 'CA', false);
console.log(p1);
console.log(p1.isAlive());

var p2 = new Person('ball', "MA");
console.log(p2);
console.log(p2.isAlive());

// trying with a function prototype 

function AdvancedPerson(name, address, alive) {
	this.name = name;
	this.address = address;
	this.alive = alive || false; // undefined == false?
}

AdvancedPerson.prototype.isAlive = function () {
	return "DOA = " + this.alive;
}


var ap3 = new AdvancedPerson('apple', 'CA', false);
console.log(ap3);
console.log(ap3.isAlive());

var ap4 = new AdvancedPerson('ball', "MA");
console.log(ap4);
console.log(ap4.isAlive());
