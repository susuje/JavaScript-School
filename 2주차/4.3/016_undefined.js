let a; 
console.log(a); // undefined

if (typeof a === "undefined") {
    console.log('a에 아무것도 할당되지 않았습니다!')
}


//!a   :: true

if (!a) {
    console.log('a에 아무것도 할당되지 않았습니다!')
}