//Map 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류입니다.

let m = new Map(); //new 는 새로운 객체를 만들거야

//Map 에 값을 넣기 //set
m.set('하나', 1)
m.set(1,'하나')
m.set(true, 1)
m.set(false, 0)

//Map의 값에 접근하기
m.get('하나')  // 1


m.set([1,2,3], '리얼리?')
m.get([1,2,3]) //undefined // 주소값이 다름.새로운배열임.
///[1,2,3] == [1,2,3] false!!!!!!!

let x= [1,2,3,4] //변수로 지정하면 됩니다. 변수가 같은 메모리주소값을 가리키고있어서..?
m.set(x,'hi')
m.get(x) //이땐됩니다


//Map의 값이 있는지 확인하기
m.has('하나') //true


// Map의 값을 제거하기
console.log(m.delete('하나'));
console.log(m.has('하나')); //false?인듯
console.log(m);

//Map 의 크기를 확인하기
m.size //4 //   4개의값을가지고있습니다



//////////////////////////

const data = new Map()
    .set('name', 'hojun')
    .set('age', 10)
    .set('height', 180)

    //////////
    let data = new Map([['one', 1], ['two',2]]) // O
let data = new Map(Object.entries({'one':1, 'two':2})) // O
let data = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X




// 직접 순회가 가능하지 않은 Object!
let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i)
}

//-------------------직접 순회가 가능한 Map!
let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i)
}
//이렇게 순회를 돌수있겠죠?!
for (const [key, value] of m) {
    console.log(key,value)
}

//object의 단점
let text = {'one':1, 'two':2}
Object.keys(test)

//map은 메서드로 모두 호출가능!
m.keys()
m.values()
m.entries()

// Map -> Object 간의 형변환
let 맵 = new Map(Object.entries({ 'one': 1, 'two': 2 }))
let 오브젝트 = Object.fromEntries(맵)



// 키 값의 중복이 안됩니다.
let map = new Map(); 
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)