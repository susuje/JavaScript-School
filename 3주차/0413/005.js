//this 특이사항 // 우선 1,2,4,번 파일이 젤중요!
//이름이 있는 함수안에 정의된 함수의 경우 this는 전역을 바라보게됩니다 // 이경우 b와 c 함수 즉,ㅠb와 c는 전역을바라봄.
//a함수는 object안에 함수입니다.

const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()
//


// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person = {
    name: 'hojun',
    age: 25,
    a(){
        console.log(this);
        console.log(this.name);
        let b = () => {
            console.log(this);
            console.log(this.name);
            let c = () => {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()

//c는 b를 따라 올라가고 b는 c를 따라올라가고 b는 a를 따라올라감 a는 person으로 가서 결국 person



///

//this mdn가면 인자로받을수있다고뜬다...

///메서드 콜백함수에서 this로 사용할 값을 제공할수도있다.
let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
}

function 인세계산함수책(e) {
    return e * (this.책 / 100)
}

function 인세계산함수영상(e) {
    return e * (this.영상콘텐츠 / 100)
}

[100, 200, 300].map(인세계산함수책, 인세규정)
[100, 200, 300].map(인세계산함수영상, 인세규정)
                                        this

/////-------------------정리하자면!!!!!!!!!!!!!
// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아닙니다. [자바스크립트에서 `globalThis`의 소름끼치는 폴리필](https://ui.toast.com/weekly-pick/ko_20190503) //1번 설명안해주심.
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// a.b.c.say() 일경우 c일때 !가장중요!
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스 //newBook3 new Book 어쩌구에서 인스턴스는 newBook3
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음

//5번 생성자함수 실습은 0412 007생성자함수폴더에있습니다.
// this 출력
let newBook4 = new Book("JavaSCript", 100000, "홍길동", "2023.04.12")

// new 키워드를 사용했을 때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일) {
    this.출력 = function (){
        console.log(this)
    }
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일    
    // return this
}
//아마이건듯