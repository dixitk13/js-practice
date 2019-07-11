
// Simple Object with print function
var steveObj = {
  name: "Steve",
  print: function() {
    console.log("Steve Obj Printing: ", this.name)
  }
}

steveObj.print(); // Steve Obj Printing:  Steve


// simple object with bind borrowed from steveObj 
var freddieObj = {
  name: "Freddie"
} 

var bindedObj = steveObj.print.bind(freddieObj);
bindedObj(); // Steve Obj Printing:  Freddie

// Define custom bind function called bind1

function globalPrint() {
  console.log("Global Fun printing ", this.name)
}

var ralphObj = { name: "Ralph" }

function bind1(object, fn){
  return {...object, [fn.name]: fn};
}

var customBind = bind1(ralphObj, globalPrint);
customBind.globalPrint(); // Global Fun printing  Ralph

// another custom bind function called bind2

function globalPrint2() {
  console.log("Global Fun2 printing ", this.name)
}

var robObj = { name: "Rob" } ;

function bind2(object, fn) {
  return function() {
    return fn.apply(object);
  }
}

var customBind2 = bind2(robObj, globalPrint2)
customBind2() // Global Fun2 printing  Rob
