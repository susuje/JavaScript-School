//함수선언되면 코드를 일단 넘어가고 호출되면 그때 다시 돌아와 코드를 실행합니다
//로로기법..?roro  뭐였지ㅜㅜ
//코파일럿
// 4월 12일 코드
//////////1.object처럼 사용되는 함수의 특성

let 함수1 = x => {
    if(true){
        console.log('hello world')
    }
    return x + 10
}

function 함수 (a,b){
    return a + b
}

console.dir(함수)//length: 2

function 함수2 (a,b,c){
    const z = a + b + c
    return z
}

console.dir(함수2)// length: 3

function 함수3 (a,b,c,d,e,f) {
    return a
}
console.dir(함수3) // length:6
//length가 파라미터의 수

//이 작업은 아마 오늘밖에안할듯.
//array, object, function 가 모두 같은 방식으로 접근하거나 값을 변경할수있네?
//object의 형태를 띄고잇어용
함수['location'] = 'jeju'
console.dir(함수) // location이 추가되었습니다

함수['name'] = 'jejufunction'
console.dir(함수) //변경안됩니다.
//console.dir(jejufunction)  안됩니다
함수['length'] = 5
console.dir(함수)// length 또한 변경이 되지 않습니다.


///////////2.아규먼트가 순서대로 들어가는 함수의 특성
//확인한번하세요~ 중요해용.
function 함수(a=10, b=20, c=30){
    return a+b+c
}

함수()
함수(100) 
함수(100,200) //330
함수(100,200,300)
함수(c=300) //330 이 아니고 350입니다.순서대로 들어갑니다. a에 300이들어가요.
함수(a=100, c=300) //430
함수(a=100, b=300, c=300) //순서가 뒤바뀌면 안됩니다.



//////////3. roro기법 원리 설명
//https://taegon.kim/archives/8058
// roro기법은 무엇인가요? 
// 입력되는 아규먼트가 매우 많은 아래의 함수의 경우 호출하는 쪽에서 어떤값이들어가는지 명확히 알기 어렵고 읽기도 어렵다
window.addNewControl('Title',20,50,100,50,true);
//여러분들이 코드를 쭉 읽어 내려가다가 hello 함수를 만났습니다. 기분이 어떨것같으신가요:

//python 형식입니다//
window.addNewControl(
    title="Title",
    xPosition=20,
    yPosition=50,
    width=100,
    height=50,
    drawingNow=true
);
//python입니다


// 로로기법을 모든 함수에서 사용하나요? 아니요!
function sum(a,b) //요런코드는 딱히 줄필요없어요

//어떻게사용하고 원리는 무엇인가요?
function 로그인정보({
    회원등급 = 'Gold',
    글쓰기 = true,
    글읽기 = true,
    채널관리 = true,
    백업 = '1주일 이내 가능',
    소셜로그인여부 = true
}) {
    console.log('...함수기능...')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
}

로그인정보({
    회원등급 : 'Silver',
    소셜로그인여부 : false, //순서가 바뀜.
    백업: '3일 이내 가능' //중간에 생략된 값도있죠
}) //전달해주는 형태는 이렇게 obj로

//왜 = 와 : 일까?
// 원리(몰라도됩니다)
//코드는 깃허브에잇어요
let one
let two
let three

let four = {one,two, three} 
//변수값을 object안에 넣으면 변수명이 key가 되고 변수의 값이 object의 value가 되는 문법
let {one,two,three} = {one:10, two:20, three:30}

let {one,two,three} = {two:10, one:20, three:30} //콘솔에찍으면 one : 10, two: 20, three:30 으로 나옵니다.
//왼쪽의 one two three는 변수; obj안에 key가아님.
let {one=100,two,three} = {two:20, three:30} //얘는 됨

//살짝 심화
//위 코드에서 로그인정보({}) 호출하면 에러가 안나지만 로그인정보()를 호출하면 에러가납니다
로그인정보()//얘는 에러가납니다
로그인정보({})

function 함수({
    a=1,
    b=2,
    c=3
} = {}){ // = {}이렇게 해야하는건 알아두셔야합니다
    console.log(a,b,c)
    return a+b+c
}

함수()//6
함수({})//6
함수({b:100}) //104

// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
//one은 100
// let {one = 1, two = 2} = {}
//one은 1
// let {a=10, b=20, c=30} = undefined




let a = 10
let b = 10
function 함수1() {
    let a = 20
    let b = 20
    function 함수2() {
        let a = 30
        console.log(a, b)
    }
    함수2()
}
함수1()






//let은 선언하고 그 다음부터 사용할수있어요


//코드를밑에다넣고 왜 실행안되지...? 아 위에 써야하구나! 이정도?