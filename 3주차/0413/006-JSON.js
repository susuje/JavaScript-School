// 제이슨은 무조건 ""로
//https://www.jeju.go.kr/news/bodo/list.htm?act=rss 
//파싱은 태그를 짤라서 사용하는거 <titile>//dfsdf//</titile>

//- JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다.
//문자열=>객체

//- JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.
//객체=>문자열




//- JSON.parse()
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj) //{"result":true, "count":42}

//- JSON.stringify()
const json1 = {"result":true, "count":42}
const s = JSON.stringify(json1)
s

const json = '[1, 2, 3]';
const obj = JSON.parse(json);
console.log(obj);


const json = '[1, 2, [1,2,3]]';
const obj = JSON.parse(json);
console.log(obj);


///깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l)); //다른주소값을 가지고있는 [10,20,30]을만든다
//[10,20,30] == [10,20,30] false, 주소값다름.

console.log(l);

// error
let l = [10, 20, 30];
let a = JSON.parse(`${l}`);
a[0] = 1000;

console.log(l);