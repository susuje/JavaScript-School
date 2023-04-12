//와플기계처럼  찍어내는 것.
//new 키워드를 씁시다
let book = {
    책이름: 'JavaScript',
    책가격: 1000,
    저자: '홍길동',
    출판일: '2023.04.12'
}

let newBook = {}

//form 에서 입력받앗습니다.
newBook['책이름'] = 'Javascript'
newBook['책가격'] = 10000
newBook['저자'] = '정수연'
newBook['출판일'] = '2023.04.12'


function Book(책이름, 책가격, 저자, 출판일){
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    
}
let newBook2 = Book("JavaScript", 10000, '홍길동', '2023.04.12') //undefined 나옴// return 값이없어서!
let newBook3 = new Book("JavaScript", 10000, '홍길동', '2023.04.12')

//////////////
// new 키워드 사용했을때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일){
    //this = {} 
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    //return this
}

