!true   	// false
!false 	 	// true
!!31   		// true
!!1   	 	// true
!!-1  	 	// true
!!0    		// false
!!'hello'   // true
!!NaN       // false
!!undefined // false
!!null      // false

////////////////////////////////////


for (const i in [1, 2, 3]) {
    console.log(i)
} // 출력되는 값은? '0','1','2'



for (const i of [1, 2, 3]) {
    console.log(i)
} // 출력되는 값은?  1,2,3



////////////////////////////////////

console.log(parseInt(" "))       //  NaN
	console.log(parseInt(""))        //  NaN
	console.log(parseInt("hi"))     //   NaN
	console.log(parseInt("10 20"))  //   10
	console.log(parseInt("10abc"))  //   10



/////////////////////////////////
let username = "";
username = username || "무명"

console.log(username) // 어떤 값이 콘솔로그될까요? // 무명



/////////////////////////////
const array1 = [1, 4, 9, 16];

// 등호 옆을 적어보세요. map을 이용해서 풀어보세요!
const map1 = array1.map(x => x*2);

console.log(map1);
//  Array [2, 8, 18, 32]


////////////////////////////////

// 다음 user의 나이 평균을 구하세요.
let user = [
    {
      "_id": "642e3071c61a23c70ae6076b",
      "index": 0,
      "age": 31,
      "name": "Hicks Garza",
      "gender": "male",
    },
    {
      "_id": "642e3071ecd6f90a87d64731",
      "index": 1,
      "age": 32,
      "name": "Ayers Harrington",
      "gender": "male",
    },
    {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "age": 39,
      "name": "Lamb Adams",
      "gender": "male",
    }
  ]
  
 
  //답
  let sum = 0;
for(const i in user) {
  sum += user[i].['age'] // sum += user[i]['age']
}
console.log(sum / user.length)
  

///////////////////////////////////

let s = 0
for (const i in '.'.repeat(101)) {
    s += parseInt(i)
}
console.log(s) 
//s는 어떤 값을 반환할까요?  0부터100의합

////////////////////////////////////////////