넥스트 2기는 모바일 웹 무시하지 마요!

***********************************************

1. 모바일 브라우저 
	오밀조밀 잘 짜야되
	작다 : 	콘텐츠 줄이기
	느리다 : 	콘텐츠 줄이기
			성능에 좋은 방법 찾기
	다양하다 : 유동형 layout (다양한 브라우저가 있죠!)
			px -> '%'
2. 모바일은 pc 화면을 잘 표현할 수 있을까?
	모바일 브라우저는 pc의 기준 서비스를 잘 보여주려고 한다.

3. view port
	<meta name ="viewport" content="width-device-width, initial-scale=1, maximum-scale=1">
	웹사이트가 940px로 만들어 졌지만
	모방일이 320px 의 크기를 표현한다면 1/3 으로 보여짐

***********************************************
1. touch event

ele.addEventListener("touchstart", function (e) {
	e.touches; 			//TouchList [touch...]
	e.changedTouches;	//TouchList [touch...]
	e.targetTouches;	//TouchList [touch...]
})

touch의 구조
	- identifier touch 포인트의 유일한 값
	- target : touch한 엘리먼트
	- pageX(Y) : 실제 페이지의 의 좌표
	- clientX(Y) : 화면(보이는 부분)에서의 좌표
	- screenX(Y) : 화면(보이는 부분)줌했을때 바뀜 

TouchList 의 구조
[
	{
		"identifier" :1,
		"target" : div,
		"clientX" :"10px",
		"clientY" :"10px",
		"pageX" :"30px",
		"pageY" :"30px",
		"screenX" :"10px",
		"screenY" :"10px",
	},
	{
		"identifier" :2,
		"target" : div,
		"clientX" :"10px",
		"clientY" :"10px",
		"pageX" :"30px",
		"pageY" :"30px",
		"screenX" :"10px",
		"screenY" :"10px",

	}
]