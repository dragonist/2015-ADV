function aaa(){
	return this;
}
aaa();
// window 나옴


function aaa () {
	this.name = "next";
}
new aaa();
// aaa{name : "next"}



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function MyButton (sSelector) {
	this.elBase = document.querySelector(sSelector);
	this.init();
	Utility.myPrint.call(this, "message is this :");
	// myPrint 부르는 시점의 this를 함수 안에 this로 지정  MyButton = this
}
// MyButton.prototype.init = function () {
// 	this.elBase.addEventListener("mousedown", function (e) {
// 		// this.changeStyle(ev.target); this = this.elBase 
// 		// addEventListener 의 callback 함수 이기 때문에 
// 	});
// }
MyButton.prototype.init = function () {
	this.elBase.addEventListener("mousedown", (function (e) {
		this.changeStyle(e.target);
	}).bind(this));
}
MyButton.prototype.changeStyle = function (elTarget) {
	elTarget.style.backgroundColor = "red";
	elTarget.style.color = "#fff";
}

var oB = new MyButton();

// bind 는 컨텍스트를 바꿀수 있다

// callback 함수가 아닌 바로 실행할땐?
Utility = {
	myPrint : function (sMsg) {
		console.log(sMsg, this.elBase);	
	}
}
//call않쓰면 여기선 this = window
// apply 는??? 뭔가요??? 






a
b 
setInterval(cb, ms)
c 
d 

실행되는 순서 -> a,b,c,d,cb 






call 은 바로 실행 - utility 성 이있어 call 안에 함수에서 this는 계속 바뀔수 있어
bind 바로실행되는 함수가 아닐때 - 실행할때 call 을 부르는 함수라 생각해

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

4. call, apply 객체 바인딩 //oop 패턴 4번째이긴 한데 어려워서 잘않씀


var nameModel = {};

var nameController ={
	getName : function () {
		return this.name;
	},
	setName : function (neName) {
		this.name = newName;
	}
}
nameController.setName.call(nameModel, "javascript");
nameController.getName.call(nameModel);





