//파선아실   a,b  - > 파라미터      7,3 --> 아규먼트 
function one(a, b){ // 1
    let z = a + b // 2
    return z ** 2 // 3
}

console.log(one(7, 3)) //100


//화살표 함수
const two = (a,b) => (a+b)**2
console.log(two(7,3))


// 이름 없이 선언하는 함수
const three = function (a, b){ // 1
    let z = a + b // 2
    return z ** 2 // 3
}

console.log(three(7,3))

// 콜백 함수
//콜백함수 : 함수를 아규먼트로 전달해서, 언젠가 사용해줄게 - 함수를 아규먼트로 가져온거야!
function four(a, b, c){
    let z = c(a, b) + c(a, b)
    return z*2
}

four(7, 3, one)

//아래와 같이 했을경우 함수의 순수성, 순수 함수의 장점을 살릴수 없습니다.
//외부에서 직접 값을 가져오는 것을 권하지않아요.하지마세용.
function four(a, b, c){
    let z = one(a, b) + one(a, b)
    return z*2
}

four(7, 3, one)

///////

// 함수

// 1. 재사용성이 높아집니다.
function one(){
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
one()
one()
one()
one()
one()

// 2. 유지보수가 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 3. 구조 파악이 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 함수의 일반적인 형태
// 파선아실
function one(a, b) { // 1
    let z = a + b // 2
    return z ** 2 // 3
}

console.log(one(7, 3))
console.log(one(7, 3))

// 화살표 함수
const two = (a, b) => (a + b) ** 2
console.log(two(7, 3))
console.log(two(7, 3))

// 이름 없이 선언하는 함수
const three = function (a, b) { // 1
    let z = a + b // 2
    return z ** 2 // 3
}

console.log(three(7, 3))
console.log(three(7, 3))

// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a, b, c) {
    let z = c(a, b) + c(a, b)
    return z * 2
}

four(7, 3, one)

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
function four(a, b, c) {
    let z = one(a, b) + one(a, b)
    return z * 2
}

four(7, 3, one)


// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics
// return, console.log를 헷갈려 하십니다.

function hello(para) {
    console.log(para)
    console.log('hello')
    return 100
}

console.log(hello(10))

let x = console.log('hello')
x // undefined

// 함수, 메서드(클래스 안에 들어간 함수)
// .을 찍어 접근할 수 있는 함수다? => 메서드
// 함수를 호출할 수 있는 이름은 결국 변수입니다.
let x = console.log
x('hello')

// 2번(아래 3개는 같은 코드입니다.)
function hello1() {
    console.log('hello');
}

function hello2() {
    console.log('hello');
    return
}

function hello3() {
    console.log('hello');
    return undefined
}

let a = hello1()
let b = hello2()
let c = hello3()

// return
function hello4() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}

hello4()

function hello5() {
    if (true) {
        if (false) { // 이 값을 바꿔보세요.
            if (true) {
                return
            }
        }
    }
    console.log('hello')
}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아닙니다.
const x = [10, 20, 30, 40];
x.forEach(function (el) {
    console.log(el)
    return
    console.log('world')
});


/////////////////////

function 함수1(a, b, c){
    return a + b + c
}

함수1(10,20,30,40)//에러가 발생하지않음.