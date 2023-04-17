// 블로그 주소 참고하기 
//https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC
//https://codepen.io/kvendrik/pen/bGKeEE
//replace가 많이사용됩니다

'paullab CEO leehojun hello CEO'

//문자열 한개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO') //'paullab CTO leehojun hello CEO'

//flag 로 global을 주어서 전체변경 (m-다중라인, i-대소문자구분x) g만거의씀.
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO') //'paullab CTO leehojun hello CTO'

// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g) 

//패턴으로 split
'paullab CEO leehojun hello CEO'.split(/CEO/g) 

//패턴이 들어가 있으면 true, 없으면 false
(/CEO/g).test('paullab CEO leehojun hello CEO') //true



//split 알고리즘문제시 주의사항.
//split 하면 내가원하는 갯수보다 1개가 더 추가되어 나온다.
'!a!abc!abcd'.split('!')
'!!!'.split('!') // ['','','',''] 4개
'!a!a!a'.split('!') //4개
'a!a!a!'.split('!') //4개
'!a!a!a'.split('!').length-1 //-1 해야지 원하는 느낌표의 개수가 나옵니다.


// 3. 일반문자열
/ hello / g

// 4. 처음과 끝
/^ hello / g
/ hello$ / g
/^ hello$ / g

// 5. 모든문자 매핑(.)
/ hello / g
/ h.llo / g
/ hello..world / g

// 6. 모든문자 매핑
/ h[eao]llo / g

// 7. 범위
/ h[a - zA - Z0 - 9]llo / g

// 8. 부정
/ h[^ ae]llo / g

// 9. 그루핑 규칙
/ (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

("hello hallo hello").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/


//문제1번//https://school.programmers.co.kr/learn/courses/30/lessons/120826
function solution (my_string, letter) {
    return my_string.split(letter).join('');
}
'BCBdbe'.split('B')
'BCBdbe'.split('B').join('')


//썜코드 정답에 new RegExp() //이건 생성자 함수
// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
    return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '')

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
    return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
    // new RegExp(패턴으로 사용할 문자열, 플래그)
    // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
    let reg = new RegExp(letter, 'g') 
    return my_string.replace(reg, '');
}
// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')


/////////////문제2번.
/// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851
//숫자를뽑아서 자연수의합을 result로
//문자를 다 지우거나 
//숫자를 다 찾아낸다

//정답유형1: 숫자를 찾는다
function solution(my_string) {
    return my_string
        .match(/[0-9]/g)
        .reduce((a,b)=>parseInt(a)+parseInt(b),0)
}

'asdfas21df333'.match(/[0-9]/g) //숫자만뽑아준다.
'asdfas21df333'.match(/[0-9]/g).map( x => parseInt(x) ).reduce((a,b)=>a+b,0)

'asdfas21df333'
    .match(/[0-9]/g)
    .reduce((a,b)=>parseInt(a)+parseInt(b),0)

// 유형2: 문자를 제거한다
function solution(my_string) {
    return my_string
        .replace(/[^0-9]/g, '')
        .reduce((a,b)=>parseInt(a)+parseInt(b),0)
}
//해설
"aAb1B2cC34oOp"
    .replace(/[^0-9]/g, '') //'1234'
    .split('')//reduce는 array에 잇는 메소드이므로 split으로 array만들어줌
    .reduce((a,b)=>parseInt(a)+parseInt(b),0)

////////문제3
///https://school.programmers.co.kr/learn/courses/30/lessons/120891
//오답 ! null 일때 length 가 없어요
function solution(order) {
    return order.toString().match(/[369]/g).length;
}

(0).toString().match(/[369]/g) // null
(10).toString().match(/[369]/g) 


//정답

function solution(order) {
    let value = order.toString().match(/[369]/g) ?? []
    return value.length;
}


function solution(order) {
    return (order.toString().match(/[369]/g) ?? []).length;
}

// 4번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해집니다.
function solution(my_str, n) {
    let result = []
    for (let i = 0; i < my_str.length; i += n) result.push(my_str.slice(i, i+n))
    return result
}

[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]
[0-9]{1,n}

"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)// 실행해보세요
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)
"abc1Addfggg4556b".match(/\w{3}/g) //문자
"abc1Addfggg4556b".match(/\d{3}/g) //숫자 //456
"abc1Addfggg4556b".match(/.{3}/g)  //모든문자
"".match(/.{3}/g)  //주의 : null

//오답
function solution(my_str, n) {
    let reg = new RegExp(`.{${n}}`,'g') //마지막 남은 것도 리턴해줘야해서 오답
    return my_str.match(reg) 
}
//정답
function solution(my_str, n) {
    let reg = new RegExp(`\\w{1,${n}}`,'g')  // '\'를 표현하기 위해 '\\'을 사용.. 이스케이프문자처럼처리하지말라
    return my_str.match(reg) 
}

console.log(`\w`) //w
console.log(`\\w`) // \w로뜹니다



///5번문제
//2번문제 업그레이드
//https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 해답
function solution(my_string) {
    return my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 오답
function solution(my_string) {
    return my_string
        .match(/\d+/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 정답
function solution(my_string) {
    return (my_string.match(/\d+/g)??[])
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

'ab1B2C34iosp'.match(/\d/g) //['1','2','3','4']
'ab1B2C34iosp'.match(/\d+/g) // ['1','2','34']

//////////////////그룹연습문제/////////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go'] //그룹으로매칭
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']



// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.
// '87a99b00fww89e' => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g) // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g)
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g)

'a10'.slice(1) // '10' 기억이....

//6번문제 그룹연습문제
//https://jsalgo.co.kr/
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)

//이거맞나..?확인해보기
function solution(data){
    let result = data.match(/([rev])(10|[0-9])/g).reduce((a, c) => a + parseInt(c.slice(1)), 0).toString()
    return `${result[0]}월 ${result[1]}일`
}


// 갑자기 알려주는 지식 : 템플릿리터럴 `` => function



/////////////////// reduce 보강설명
// reduce의 형태
array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

[10, 20, 30].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        console.log(parseInt(currentValue.slice(1)))
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce((a, c) => a + parseInt(c.slice(1)), 0);

//좀더쉽게, 그렇지만효율적이지 않아요
['a10', 'a20', 'a30']
    .map(v=> parseInt(v.slice(1)))
    .reduce((a,b)=>a+b,0)


    //보강설명, 모르셔도 괜춘...