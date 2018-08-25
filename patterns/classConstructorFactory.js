console.log("--- class implementation ---");
// class
class HondaCar {
	drive() {
		console.log("Honda Car Drives");
	}
}

const car1 = new HondaCar();
console.log(car1.drive());

console.log("--- constructor implementation ---");

//constructor

function TeslaCar () {}

TeslaCar.prototype.drive = function () {
	console.log("Tesla Drives electric");
}

const car2 = new TeslaCar();
console.log(car2.drive());

console.log("--- factory implementation ---");

// factory

const car = {
	drive() {
		console.log("zoom zoom");
	}
};

function FactoryCar () {
	return Object.create(car);
}

const car3 = new FactoryCar();
console.log(car3.drive());

console.log("--- new factory implementation ---");
// re-factored? factory implementation
const AutoCar = {

	NewCar(optionType) {
		return Object.create(this.options[optionType]);
	},

	options: {
		sport : {
			drive () {
				console.log("trying to move");
			},
			getOptions: function() {
				return ["led", "adaptive-lighting"];
			}
		}
	}

};

const newCar = AutoCar.NewCar('sport');
newCar.drive();

const oldCar = new AutoCar.Car();







