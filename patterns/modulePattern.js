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