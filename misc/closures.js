var counterIncrementer = (function() {
    var counter = 0;

    return function() {
    	var innerCounter = 0;
    	return function() {
        	console.log("innerCounter ", ++innerCounter, " counter", ++counter);
        }
    };
})();

// prints out 1
const some = counterIncrementer();
some()
some()
some()
// prints out 2
counterIncrementer()();
// prints out 3
counterIncrementer()();