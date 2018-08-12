/* Using the closures, we can create objects with private 
   and public parts. These are called modules and are very 
   useful whenever we want to hide certain parts of an object and only expose an interface to the user of the module. 
 */
const peopleList = (function() {
    // private members
    const people = [];

    // public members
    return {
        addPerson: function(person) {
            people.push(person);
        },
        removePerson: function(person) {
            var index = people.indexOf(person);
            if (index >= 0) {
                people.splice(index, 1);
            }
        },
        getPeople: function() {
            return JSON.parse(JSON.stringify(people));
        }
    };
})();

peopleList.addPerson("Apple");
peopleList.addPerson("Ball");
peopleList.addPerson("Cat");

console.log(peopleList.getPeople());
peopleList.removePerson("Cat");

console.log(peopleList.getPeople());

console.log("can we see people? " , peopleList.people)

peopleList.people = ["apple"]

console.log("What people is this? ", peopleList.people)

console.log(peopleList.getPeople());