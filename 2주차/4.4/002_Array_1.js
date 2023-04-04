//원시타입과 객체타입...아 헷갈려
//Array 베열은 항상 const로 설정
//const는 값의 변화가 안된다고 하지 않앗나? 
//arr ---> [10,20,30] 메모리주소는항상 a1이므로 안에 10,20이 변해도 ㄱㅊ

const arr = [10, 20, 30];
arr[0] = 100;

console.log(arr); // [ 100, 20, 30 ]
console.dir(arr); // [ 100, 20, 30 ]

// 💡대괄호 표기법과 점 표기법의 차이
// 숫자 값은 대괄호로 밖에 호출할 수 없고,
// 문자로 입력된 값은 점(.)으로 호출할 수 있다.
console.log(arr[1]); // 20
// console.log(arr.1); // ERROR
console.log(arr["length"]); // 3
console.log(arr.length); // 3

arr.length = 10;
console.log(arr); // [ 100, 20, 30, <7 empty items> ]

// 💡프로퍼티 추가
arr["김멋사"] = 100;
arr.박멋사 = 1000;
console.log(arr); // [ 100, 20, 30, <7 empty items>, '김멋사': 100, '박멋사': 1000 ] length.에는 포함안됨!

// 💡배열의 생성 방법
let arr1 = [];
let arr2 = [1, 2, 3];
let arr3 = new Array(4, 5, 6);
let arr4 = new Array(3);

console.log(arr1); // []
console.log(arr2); // [ 1, 2, 3 ]
console.log(arr3); // [ 4, 5, 6 ]
console.log(arr4); // [ <3 empty items> ]

// 💡배열의 특징
// [1] 배열은 순서가 있다. 배열의 순서를 index, 이 순서로  호출하는 것을 indexing이라고 한다.
//         배열 안의 값을 원소(elements)라고 한다.
const arr5 = [10, 20, 30];
arr5[0] = 100;

// [2] 배열에 다른 원시 타입과 객체 타입을 포함할 수 있다.
const arr6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr6[1]); // [ 4, 5, 6 ]
console.log(arr6[1][2]); // 6

// 💡 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 메트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)

// 💡 배열의 요소 추가
const arr7 = [1, 2, 3];
arr7.push(5);
console.log(arr7); // [ 1, 2, 3, 5 ]


// push
const arr = [1, 2, 3];
arr.push(4)

// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`          
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')


const arr = [1, 2, 3, 4, 5]
arr.pop() 
// 1. 마지막에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5]
let lastValue = arr.pop()
arr

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2); 

let firstValue = myArray2.shift();
firstValue
// 사과


///정리
//push: 배열의 뒤에 값을 추가한다.
//pop: 배열의 마지막 값을 꺼내고, 그 값을 반환한다.
//unshift: 배열의 앞에 값을 추가한다.
//shift: 배열의 앞에서 값을 꺼내고, 그 값을 반환한다.


// arr.splice(start, deleteCount, items)
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

//// 문제
// ||를 사용해서 답변해주세요.
const arr = [10, 20, 30, 40, 50]
const x = [1, 2, 3]
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
// splice만 사용하여 위처럼 만들어주세요.
arr.splice(1, 0, ...x);
arr.splice(7, 0, ...x);

const arr = [10, 20, 30, 40, 50]
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는  splice는 arr가 아니라 삭제된 값을 반환합니다.


const arr = [10, 20, 30, 40, 50]
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.






// 실무 팁(***)
let tip1 = [1, 2, 3, 4, 5]
// console.log(tip1[tip1.length-1])
// 원본 수정 없이 [1, 2, 3, 4] 값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop())
let tip2 = [...tip1]
console.log(tip2.pop())
console.log(tip2)

let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]

console.log([...tip3, 1000, ...tip4])

const tip5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat())

const tip6 = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
]

tip6.flat()
tip6.flat(1)
tip6.flat(2)
tip6.flat(Infinity) // 다 펼쳐지면 스톱


const tip7 = new Array(10).fill(0) // Array(10).fill(10) 도 됩니다.
const tip8 = Array.from('hello Wolrd')

// '.'.repeat(100).split('.') 권하진않아용  from을 사용하세여.




let tip9 = [1, 2, 3, 4, 5]
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)])
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)])

let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2, 0, 1000)
tip10

// map하고 다시 오겠습니다.
// const tip9 = Array(100).fill(0).map



// map (데이터 뽑으려고 사용합니다. ) 면접단골질문
// map은 forEach와 다르게 새로운 배열을 생성합니다.
const arr = [1, 2, 3]
arr.map(function(item, index){
    return x**2  //새로운 배열을 만들겟다
})

arr.map(function(x){
    return x**2  //새로운 배열을 만들겟다
})  // [1,4,9]

arr.map(x => x**2) //실무

const arr = Array(100).fill(0)
//같은 코드 1
arr.map((v,i) => i)

//같은 코드 2
arr.map(function(v,i){
    return i
})

//같은 코드 3
const arr = Array(100).fill(0)
function hojun(v,i){
    return i
}
arr.map(hojun)

//같은 코드 4 
const arr = Array(100).fill(0)
arr.map((v, i) => {
    return i
})