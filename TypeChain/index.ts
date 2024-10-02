// call signature
// 1) function 함수
function add1(a:number, b:number){ // function add(a: number, b: number): number
    return a + b
}

// 2) 화살표 함수
const add2 = (a:number, b:number) => a + b // const addd: (a: number, b: number) => number

// call signature 선언하는 방법
type Add = (a:number, b:number) => number;

const add: Add = (a,b) => a + b // type Add = (a: number, b: number) => number