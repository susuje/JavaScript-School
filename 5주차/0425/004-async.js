async function message() {
    let hello = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello'); //'hello'가 let hello 에 들어감.
        }, 100)
    })

    let world = await new Promise((resolve) => { //Promise객체가반환될때까지 뒤에다른코드가잇다면 실행안됨. await로인해
        setTimeout(() => {
            resolve('world'); //await는 fulfilled된 값, 즉 world를 반환하고 그 값인 world가  let world에 들어가게된다.
        }, 100)
    })

    console.log(`${hello} ${world}`);
}

message();