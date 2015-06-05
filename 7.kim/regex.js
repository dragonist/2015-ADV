
var regex = /https?:/g
var targetText = "http: vs. https: or httpss:";

var matches = targetText.match(regex);
console.log(matches);

targetText = targetText.replace(regex, "protocol");
console.log(targetText);



**************************************************
regexr.com 

^abc 앞줄에 abc인것
abc$ 뒷줄에 abc인것
[,]무한대
+ 반드시 하나는 존재
? 존재하든 말든 한개만
* 존재하든 말든 여러개
. 모든 문자 (js 는 줄바꿈 포함 않됌)
[^] not 

() group 그룹은 여는것 기준으로 순서가 정해짐
group 중에서 찾고 싶은거: $1 $2


입력되지 말아야할 공백이 입력 되었을때 공백을 지워는 기능이 있음 좋겠지!

한글을 가-힣 ㄱ-ㅎ

정규표현식은 가장 넓은범위를 인정한다! 그래서 문제가 생길 수 있어 ㅠㅠ


/<\/?[a-z0-9]+[^>]*>/g 
tag 찾고 싶을때

/<\/?[a-z0-9]+ id=[^>]*>/g 

\s+ 공백인거
\S+ 공백 아닌거
\w+ 문자인거
\d+ 숫자인거
\b+ 바운더리 : 스페이스 특수문자 (않잡히면서 찾을때 조건 걸때)

http(s)? 보단
https? 이게 좀더 예뻐!

/\w+=(["']).*?\1/g 
<div id='' class="" > 이런거 찾을때

/https?:\/\/[\w\-]+(?[\w\-]+)/

/div>$/

/(\d+)(?=(?:\d{3})+$)/g

$1,

lookahead

'a b c d e f g'.replace(/([a-z])/g,function ($0, $1) {
	console.log($0);
	return $1;
})

^\s+|\s+$ 
이렇게 공백 찾아서 제거

과제
#fff
#ff0000
rgb (255, 255,255)
rgba(255,255,255,0.5)
색상 값만 골라오는것
//rgb에는 공백이 있을수 있음
#ffff 
#ggg 16진수 아닌거
rgb(255, 255, 255, 1.1.)

react.js
js 로 네이티브 만드는거


#[\da-f]{3}([\da-f]{3})?\s|rgba?\s?\((\s?\d{3}\s?,){2}\s?\d{3}\s?(,\s?\d?.?\d)?\)


[^.]