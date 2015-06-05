this : 해당 함수가 실행되는 공간

function this - window

function my () {
	return this
}

method this - Object

var mySNS = {
	name : "name",
	getName : function () {
		return this.name;
	}
}

constructor this - 

function mySNS () {
	this.name = "Line";
	this.getName = function () {
		return this.name
	} 
	// return this 가 생략 됬다가  new하면 나타남 
}
var myObj = new mySNS();

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

3가지 oop 패턴 = object oriented programing 객체지향 패턴


var oName1 = {name : "java" , getName : function () { return this.name }} 
var oName2 = {name : "lulu" , getName : function () { return this.name }} 
var oName3 = {name : "rara" , getName : function () { return this.name }} 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

생성자 패턴 constructor pattern

function Name (name) {
	this.name = name;

	this.getName = function () {
		return this.name;
	};

	this.setName = function (newName) {
		this.name = newName;
	};
}
var obj1 = new Name("java");
obj1.getName();
var obj2 = new Name("lulu");
obj2.getName();

// obj.getName === obj.getName false ㅠㅠ
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
프로토 타입 패턴 prototype pattern : 좀더 메모리 효율성을 높일 수 있다.


function Name (name) {
	this.name = name;
}

Name.prototype.getName = function () {
	return this.name;
};

Name.prototype.setName = function (newName) {
	this.name = newName ;
};

var obj1 = new Name("java");
obj1.getName();
var obj2 = new Name("c#");
obj2.getName();
// obj1.getName === obj2.getName; true 

obj.__proto__ == Name.prototype //true
obj1 instanceof Name //true
obj1 instanceof Object // true



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
obj1.__proto__ == Name.prototype //??
10분 부터 

classList
delegate 
qu

Array.prototype.indexOf.call($0.parentNode.children, $0);


[].slice.call()

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


bind?? 

