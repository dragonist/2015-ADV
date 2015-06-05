Go.utility.arrayUtil = {
	isArray : function (a) {
		return toString.call(a) === "[object Array]";
	},
	getLastItem : function (a) {
		return a.pop();
	},
	getFirstItem : function  (a) {
		return a.shift();
	},
	appendFirstItem : function (a, item) {
		a.unshift(item);
	}
} 