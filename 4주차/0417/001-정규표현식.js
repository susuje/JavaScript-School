//정규표현식
//[^] 이게 부정인거같음..
// /h.llo/ hello, hallo,hollo 다 잡음
// /h[eo]llo/ 
hello,hollo 만 잡음

[]=> 택 1

// /h[^0-9]llo/ 숫자가 아닌거

// gm 옵션을 많이 함. gim 옵션은 많이 안해요

// [a-zA-Z] 소문자 대문자 중 택1
// [a-zA-Z][^0-9]llo

// (on|ues|rida) Mon-Sun 중에 Monday Tuesday Friday 포함. 
// (on|ues)|(rida)

// /010 - [0-9][0-9][0-9][0-9] - [0-9][0-9][0-9][0-9]/gm  폰번호
// /010 - [0-9]{4} -  [0-9]{4}/gm

// /0[0-9]{2}-[0-9]{3,4}-[0,9]{4}/gm    064-657-3453도 잡힘

// 0[0-9]{2}[-.! ]?[0-9]{3,4}[-.! ]?[0-9]{4}
//010!0392!9384 도 잡고 
//?은 앞에잇는 문자가 0~1개 //나올수도있고안나올수도있다


// /0[0-9][0-9]

//이메일에서 + 은 한개이상! 
// @naver.com 이렇ㄷ게나오면안되고  //a@naver.com 최소한이렇게나와야함



//  /[a-zA-Z]{1,}@[a-zA-Z]{1,}.com/   {1,} 한문자이상
// /[a-zA-Z]+@[a-zA-Z]+.com/   한개이상 위에랑똑같

// [a-zA-Z\-\.]+@[a-zA-Z]+.com //역슬래쉬로 -와 . 도 포함하게 한다.
// [a-zA-Z\-\.]+@[a-zA-Z]+.[a-z] //
// [a-zA-Z\-\.]+@[a-zA-Z\.]+.[a-z]+
// [a-zA-Z\-\.]+@[a-zA-Z\.]+\.[a-z]+

//교안11번 not숫자랑 숫자를 많이 쓴다
// /\w{5}/ 워드 다섯개 (글자다섯개)
// /\d/ 숫자만잡겟다  /\D/ Not 숫자

// /\[.*\]/gm      [] 대괄호안에감싸여진문자열

// [ㄱ-ㅎ|ㅏ-ㅣ|가-힣]    # 모든 한글
// [^[가-힣]+$]           # 한글만 허용
// [^[가-힣\\s]+$]        # 공백 허용