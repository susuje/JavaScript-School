
let x = 5;
let y = 10;

console.log(x > y);; // false


// true . false 값을 and, or 연산했을 경우 반환값은 true, false
let a = true;
let b = false;

console.log(a && b); // false



// true . false 가 아닌 값을 and, or 연산했을 경우 단락회로평가를 하게됩니다
let a2 = 'hello';
let b2 = '';

console.log(a2 && b2); // '' 아무것도없는 빈 문자열이 출력됨. a2를보고 b2를 봐서 마지막b2인 빈문자열이 출력됨/


///////// 별표 4개 -짱짱중요짱짱
console.log(Boolean('hello')); // true
console.log(Boolean('')); //false
console.log(Boolean([1, 2, 3])); //t
console.log(Boolean([])); // t...말도안됨.
console.log(Boolean({'one': 10, 'two': 20})); //t
console.log(Boolean({})); // true
console.log(Boolean(0)); // f
console.log(Boolean(-1)); //t

//false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)) //f
console.log(Boolean(undefined)) //f


/// 
if (undefined){
    console.log('hello')
}

let aa;
if (aa){
    console.log('hello')
}

// 답할 수 있어야 견고한 코드를 짤 수 있습니다.
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let aaa;
if (aaa > 100){
    console.log('hello')
}