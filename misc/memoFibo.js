
function Fibo() {
    let mycache = {
		1: 1,
		2: 1
	};
	let cached = function (x) {
		if (!mycache[x]){
          let newx = Number(mycache[x-1]) + Number(mycache[x-2]);
      
          mycache[x] = newx;
        } 
		return mycache[x];
	}
    let next = function (x) {
      if (x == 1 || x == 2){
		return 1;
      } 
	  else {
		const prev = cached(x-1);
		const prev2 = cached(x-2);
		return prev + prev2;
      }
    }
    return {
      next: next
    }
}

function fiboSeries(count) {
  let fiboIns = new Fibo();
	for(let i = 1;i < count ; i++) {
		console.log(fiboIns.next(i));
	}
}

fiboSeries(10);
