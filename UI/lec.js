* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    function a() {
        var i = 0; //undefined :hoisting

        for (var i = 0; i < 10; i++) {

        }
        console.log(i)
}
//10
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
var i = 0;

function a() {
    var i = 0; //undefined :hoisting

    for (var i = 0; i < 10; i++) {

    }
    console.log(i);
}
a(); //10
console.log(i) //0
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

scope chain: 지역변수에서 전역 변수로 쭉 올라가는것

function b() {
    var nami = "Line";

    function innerB() {
        var innerName = "Kakao";
        console.log(nami);
    };
    innerB();
    console.log(innerName); //없음 
}

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

즉시 실행 함수
(function d () {
	// body...
})();
(function () {
	// body...
})();
(function () {
	// body...
}());

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
var name ="Line";
(function () {
	var name2= "Kakao";
	console.log(name+" & "+name2);
}())
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

function getName (name) {
	return name;
}
var getName = function /*여기 이름 쓰지마*/(argument) {
	// body...
}
//expression
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
scope
	local
	global
	closure // 유효 하지 않음 
	//전역은 아닌데 
	//자신을 감싸는 함수 안에 있는 변수
	// 자신의 scope 밖에 있는 변수들에 
	//접근 할 수 있는 함수를 의미함
function mySns () {
	var name = "Line";
	return function(){
		return name;
	};
}

var fGetName = mySns();
//이순간! mySns는 종료되지 못하고 있다!!!!!
//누군가 name 을 계속 참고 하고 있기 때문에!
//메모리에 남아 있다고 해서 큰 문제가 있는건 아니야 괜찬

fGetName();

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

function mySns () {
	var name = "Line";
	return function (name2) {
		console.log(name + name2);
	}
}
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=462733617090664&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//변수값이 충돌나지 않게

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

모듈패턴?
private public 을 구분하게 해주는 패턴

function mySns () {
	var name = "Line";
	return {
		getName : function () {
			return name;
		},
		setName : function (newName) {
			debugger;
			name =  newName;
		}
	}
}

var mySwap = mySns(); // mySwap = 오브젝트
mySwap.getName();
mySwap.setName("lulu")
mySwap.getName();

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

function execOperation(callback, str){
	var result = callback();
	console.log(str+ result);
}
function multiply(arr){
	debugger;
	return arr[0]*arr[1];
}(arr);
// function power(arr){
// 	var result = 1;
// 	for (var i = 1; i <= arr[1]; i++) {
// 		result =result * arr[0];
// 	};
// 	return result;
// }
// function add (arr) {
// 	var result = 0;
// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		result = result+ arr[i];
// 	};
// 	return result;
// }


execOperation(multiply, "곱하기는:")([3,4]);



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
javascript 변수는 그 함수가 실행될때 결정됨
함수는 스택에서 생기고 closer가 생기면 않없어져
함수는 끊났지만, scope는 남아있음

