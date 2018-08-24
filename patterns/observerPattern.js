var Subject = function() {
  var observers = [];

  function subscribe(obs) {
    observers.push(obs);
    console.log(`Subject subscribing Observer# ${observers.length}`);
  }

  function unsubscribe(obs) {
    var index = observers.indexOf(obs);
    if(index > -1) { 
      this.observers.splice(index, 1);
      console.log(`Subject unsubscribing Observer# ${index}`);
    }
  }

  function notify(index) {
    if (observers.length > index){
      console.log(`Subject notifying Observer# ${index}`)
      observers[index].notify(index);
    }
  }

  function notifyAll() {
    console.log('Notifying All Observers')
    for(var i = 0 ; i < observers.length; i++) {
      observers[i].notify(i);
    }
  } 

  return {
      subscribe: subscribe,
      unsubscribe: unsubscribe,
      notify: notify,
      notifyAll: notifyAll
  }

};

var Observer = function() {
    function notify(index) {
        console.log(`Observer ${index} is called `);
    }

    return {
      notify: notify
    }
}

var subj1 = new Subject();
var subj2 = new Subject();
var obs1 = new Observer();
var obs2 = new Observer();
var obs3 = new Observer();


subj1.subscribe(obs1);

subj2.subscribe(obs2);
subj2.subscribe(obs3);


subj1.notifyAll();
subj2.notifyAll();

