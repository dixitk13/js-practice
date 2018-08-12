// singleton pattern
var MyList = (function () {
	var config;

	function MyArrayList(size){
		this.random = Math.random();
		this.size = size || 16;
	}

	return {
		getList: function(size) {
			if (config === undefined) {
				config = new MyArrayList(size);
			}
			return config;
		}
	};

})();

var obj = MyList.getList();
console.log(obj);

var obj2 = MyList.getList(10);
console.log(obj);