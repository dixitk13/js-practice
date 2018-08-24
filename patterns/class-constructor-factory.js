// class
class HondaCar {
	drive() {
		console.log("Honda Car Drives");
	}
}

const car1 = new HondaCar();
console.log(car1.drive());

//constructor

function TeslaCar () {}

TeslaCar.prototype.drive = function () {
	console.log("Tesla Drives electric");
}

const car2 = new TeslaCar();
console.log(car2.drive());

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