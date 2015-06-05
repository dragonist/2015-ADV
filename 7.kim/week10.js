caniuse.com
promise
######################################################################

var p = new Promise(function(resolve, reject) {
	setTimeout(function () {
		resolve('data');
	}, 10000);
});

p.then(function (data) {
	console.log(data);
});

######################################################################

var p = Promise.resolve(3);
Promise.all([true, p])
	.then(function (values) {
		console.log(values); //[true, 3]
	});

Promise.race([true, p])
	.then(function (value) {
		console.log(value); // true
	});
######################################################################

var p = new Promise(function  (resolve, reject) {
	var img = new Image();
	img.onload = function () {
		resolve(img);
	}
	img.onerror = function () {
		reject('Something went wrong');
	}
	img.src = path;
})

load('/path/to/img.png')

Promise.all([
	load('img1.png'),
	load('img2.png'),
	load('img3.png'),
	load('img4.png')
]).then(function (images) {
	
});

Promise.race([
	loadHTML('/path/to'),
	load('img2.png'),
	load('img3.png'),
	load('img4.png')
]).then(function (images) {
	
});

######################################################################

polyfill 
브라우저를 덜 고민 하고 싶다면? 
이런거 써봐~

mordernizer
브라우저가 저 기능을  쓸수 있는지 탐색만 하는것 

boilerPlate
내가 세팅은 다 끝내놨어

html5 boilerPlate
meanstack boilerPlate

html5 shiv

workaround (꼼수)

nigayo.github.io 

http://www.slideshare.net/ibare/ss-39274621
정규표현식

