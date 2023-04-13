// 중요도가 쫌 있습니다 this(***) 자신을 호출하는 객체, 생성하는 객체

function a() {console.log(this)}
a()//window호출 왜냐면 this는 자신을 호출한 객체를 뜻하기때문에.

//console.log는 window에있는애 == window.console.log()
//a()  == window.a() 이니까 점 앞에를 보면된다.


let myObj = {
    val1: 100,
    func1: function () {
        console.log(this); 
        //this가 누구일까?  
        // 찍어보면됩니다 콘솔로그로.
        //1. func1
        //2. myObj
        //3. window
    }
}

myObj.func1(); // myObj 호출  .앞에 myObj쥬



///////////////////////
let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}

let test = myObj.func1;
test() //test를 호출한 애가 윈도우기때문에.. window
//함수의 이름은 변수, 변수는 포스트잇.가리키는거..


/////////////this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문입니다.
//bind를 포함한 예외사항이 있습니다.

//자기자신을 호출한 녀석을 this로 가리키게된다.

function sayName(){
    console.log(this)
}

var c = {
    'hello' : 'world',
    'say' : sayName
}

var b = { //var b= {c}
    'c' : c,
}

var a = { //var a = {b}랑 같다
    'b':b
}

c.say() //c
b.c.say()//c
a.b.c.say()//c

//문제를 조금더꼬아보겠습니다.
function sayName(){
    console.log(this)
}

var c = {
    'hello' : 'world',
    'say' : sayName
}

var b = { //var b= {c}
    'c' : c,
    'say': sayName
}

var a = { //var a = {b}랑 같다
    'b':b,
    'say': sayName
}
a.b.say()//b
a.say()//a
c.say()//c
a.b.c.say() //c 
//즉,그냥 점 앞에잇는애




///프로그래머스 문제
///https://school.programmers.co.kr/learn/courses/30/lessons/120903
//두개풀음 ㅠㅜ첫번째문제에 졸음
// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
    let answer = [];

    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            answer.push(i);
            n = n / i;
        } else {
            i++;
        }
    }

    return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}
//https://school.programmers.co.kr/learn/courses/30/lessons/120852
//중복제거


////추가 예제 ////
var name = 'hojun'
function sayName(){
    console.log(this.name)
}

sayName() 

let peter = {
    name: 'Peter Parker',
    say: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

peter.say() //Peter Parker
bruce.say() //Bruce Wayne

////////////////////////////

function attackBeam(){ ///레이저 공격
    this.hp -= 20
}

function attackKnife(){ ///칼 공격
    this.hp -= 5
}

let jombi = {
    name: 'jombi',
    damaged: [attackBeam, attackKnife],
    hp : 10000,
    power:2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp : 1000,
    power: 100
}

jombi.damaged() //나를 호출한놈의 hp를 깍는다.
jombi // hp 20깍임.

///
function attackBeam(){ ///레이저 공격
    this.hp -= 20
}

function attackKnife(){ ///칼 공격
    this.hp -= 5
}

let jombi = {
    name: 'jombi',
    damaged: [attackBeam, attackKnife],
    hp : 10000,
    power:2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp : 1000,
    power: 100
}

jombi.damaged1()//Beam
jombi.damaged2() // Knife
jombi.hp // hp 25 깍임.
/////

function attackBeam(){ ///레이저 공격
    this.hp -= 20
    console.log(this) //위에꺼 주석하고 이거 출력하면 함수임.
}

function attackKnife(){ ///칼 공격
    this.hp -= 5
}

let jombi = {
    name: 'jombi',
    damaged1: attackBeam, 
    damaged2: attackKnife,
    hp : 10000,
    power:2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp : 1000,
    power: 100
}

jombi.damaged[0]()//Beam
jombi.damaged[1]() // Knife
jombi.hp // hp 25 깍임.

/////////




////this 사용예시
let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());


////////
function a(){
    console.log(this)
    function b(){
        console.log(this)
        function c(){
            console.log(this)
        }
        c()
    }
    b()
}
a() //console log찍고 b실행시킴.

//a와 b와 c 모두 윈도우
//a.b.c()이런식으로 호출한 객체를 타고 올라가는 형태가 아님.
// a() b()
//혼란을 가중시키면 위에꺼만보세요.....