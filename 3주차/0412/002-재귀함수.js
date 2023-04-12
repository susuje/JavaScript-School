//재귀함수 중요도 별하나도 아깝습니다.하지만 나중에 고급때 별두개로 변합니다.
//다이나믹 프로그래밍, 메모라이징 기법

//재귀함수 => 내가 나를 호출하는것
//반복문으로 반복할수있는것은 재귀함수로 만들수있어요
// 재귀함수로 만들수있는것은 반복문으로도 만들수있습니다.

//재귀함수는 장점이없어요..쓰지마세용ㅎ;;ㅋㅋ실무에서는 반복문쓰세요
//알고리즘 문제에서는 간혹 재귀함수를 사용해야할때가있어용.
//팰린드롬 /오디오 기러기 우영우 스위스 토마토같은거 

//1.팩토리얼
// 5! == 5 x 4 x 3 x 2 x 1
result = 1
for(let i=2; i<6; i++){
    result *= i
}
result // 120

function factorial(n){
    if (n<=1){ //종료조건 없으면 무한반복이여서 큰일납니다.
        return n
    } //조건을만나서 일찍 return 하면 뒤에코드를 볼필요가없다. //early return
    return n* factorial(n-1)
}
//                return                     최종값
factorial(5)     // 5*factorial(4)               5*24 ==120
factorial(4)    // 4 * factorial(3)                4*6 ==24
factorial(3)    // 3 * factorial(2)                 3*2==6
factorial(2)    //2* factorial(1)                  2*1 ==2
factorial(1)    // 1                   다시올라가면 



//누적합 // 비효율적인 코드입니다.
result = 0
for(let i=1; i)

//2. 문자열 뒤집는 것
result = ''
for(const i of 'hello world') {
    result = i + result
}
result //  뒤집어서 나옵니다


function reverse(txt){
    if (txt.length <= 1){
        return txt
    }
    return txt[0] + reverse(txt.slice(1))
}
reverse('hello world') //'hello world'


function reverse(txt){
    if (txt.length <= 1){
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello') 