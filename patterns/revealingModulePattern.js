/*  entire object logic in the private scope of the module and 
 then simply expose the parts we want to be public by 
 returning an anonymous object. 
*/

const peopleList = (function() {
    // private members
    const people = [];

    function addPerson(person) {
        people.push(person);
    }

    function removePerson(person) {
        var index = people.indexOf(person);
        if (index >= 0) {
            people.splice(index, 1);
        }
    }

    function getPeople() {
        return JSON.parse(JSON.stringify(people));
    }

    // public members
    return {
        addPerson: addPerson,
        removePerson: removePerson,
        getPeople: getPeople
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