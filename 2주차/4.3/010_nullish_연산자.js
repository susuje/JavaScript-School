// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필(최신문법을 구식 브라우저 에서도 사용할 수 있도록 해주는 것)이 필요합니다.
//https://ko.javascript.info/nullish-coalescing-operator

let firstName = null;
let lastName = null;
let nickName = 'licat';

console.log(firstName ?? nickName) // licat
console.log(firstName ?? lastName ?? nickName) // licat
console.log(firstName ?? lastName ?? nickName ?? '익명 사용자') // 만약 nickName도 null이면 마지막 '익명 사용자'가 떠요

let a = null;
let b = 10;
let c = null;

console.log(a ?? b?? c) // 10

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100) // 100// 하이트가 없네용. 100 고 
console.log(height ?? 100) // 0// 하이트가 null이야? 아니 0인데 -> 아그럼 0

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮아용.
let height2;
console.log(height2 || 100)
console.log(height2 ?? 100)

let height3 = '';
console.log(height3 || 'hello')
console.log(height3 ?? 'world')

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
