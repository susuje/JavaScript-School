//힘들면 힘들수록 내가 더 경쟁력있어지구있구낭ㅎㅎ

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el){
    return el % 2 === 0
})

/// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
///프로그래머스 코테 레벨0! 
function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1) //아이템자리에 _를 사용. 의미업는값이니까용
        .filter((v) => v % 2 === 0)
        .reduce((a, c) => a + c, 0);
}

//홀수
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function(el){
    return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))


// reduce , 0을항상 넣어주세용
const arr3 = [1, 2, 3, 4, 5, 6]
arr3.reduce((a,c)=> a+c, 0) //0은 초기값

// includes
const arr1 = ['hello', 'world', 'hojun']
arr1.includes('world') //true

//join
const arr4 = ['hello', 'world', 'hojun']
arr4.join('!') // 'hello!world!hojun'

const arr5 = ['010', '5044', '2903']
arr5.join('-') //'010-5044-2903'

const arr6 = [010, 5044, 2903]
arr6.join('-') // 이렇게하면안됩니다

//0b100 //4 // b는 바이너리의 약자
//0o100 //64 // o는 옥타의 첫글자
//0x100 //256 // x는 헥사