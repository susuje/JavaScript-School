//set은 집합이다 //여집합 교집합 차집합 합집합  이런거..
//실무에선 많이 사용을 안하지만 알고리즘 문제에서 굉장히 아주 많이나옵니다.


let s = new Set('aabbbccccdd') // 중복을 제거하는구나!
console.log(s) // {'a','b','c','d'} 
s.size //4

회사게시판 = ['이호준','이호준','이호준','이호준','이호준','이호준','김연하','최흥석','이나영','김연하']

//문제1. 몇명이 게시판에 게시물을 썻나요?
let 게시자 = new Set(회사게시판) //{'이호준','김연하','최흥석','이나영'}
게시자.size //4명

//문제2. 각각 몇개의 게시물을 작성했나요?
for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i))
}

for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i).length)
}



////-------------이건 매우 어렵습니다. 초급자에게 권장하지 않습니다.
let map = new Map() 
//key와 value를 만들거에요
for (const i of 회사게시판){
    map.set(i, (map.get(i) || 0)+1) //없으면 0을넣는다..?
}

//1번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0)+1)

// let map = new Map() 하고 map.get('이호준') //undefined
map.set('이호준',1) //최종

//2번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0)+1)
map.set('이호준',2) //최종


// set 연습 ///
let s = new Set('aabbbccccdd')
s.sizes //4
s.has('a') //true
s.has('f') //false
s.add('z') //{'a','b','c','d','z'}


//거의 of로 순회합니다
for(const i of s) {
    console.log(i)
}

//set의 forEach 강사님코드꼭보기.

let s = new Set('aabbbccccdd'.split('')) //배열됩니다.
s // {'a','b','c','d'}
// let s = new set(['a','a','b'...])

//구냥외워~
// 교집합
let a = new Set('abc')
let b = new Set('cde')
//[...a]  //['a','b','c']
let cro = [...a].filter(e=>b.has(e)) //['c']


//합집합
let union = new Set([...a].concat(...b))
let union = new Set([...a,...b])
//union // {'a','b','c','d','e'}

//concat
let a = [1,2,3]
let b = [4,5,6]
a.concat(b) // [1,2,3,4,5,6]
//[...a,...b]를 더 자주씁니다.



//차집합
let dif = [...a].filter(e => !b.has(e)) 










// 질문.set,map, object, array,string가 이터러블객체? 순서를 보장하는지?
// 이터러블한 객체란? 순회가 가능한 객체다.
// set, map, array, string

//순서를 보장하나요? (object는 순서를 보장하지 않습니다.)
//넣은순서대로 순회할수있으냐 //set,map, array, string이 순서를 보장한다.


회사게시판 = ['이호준','이호준',NaN,NaN]
let test= new Set(회사게시판) //{'이호준',NaN // 원래는 NaN이 두개가 나와야함. NaN !== NaN이므로.근데 set에서는 같은걸로표현.}


