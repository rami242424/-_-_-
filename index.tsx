unknown : 어떤 타입인지 모르는 변수는? 
let a: unknown;
let b = a + 1 // 'a' is of type 'unknown'

해결
let a : unknown;
if(typeof a === "number"){
    let b = a + 1; // let a: number
}
if(typeof a === "string"){
    let b = a.();
}

void : 아무것도 return 하지 않는 함수를 대상으로 사용
function hello(){ // function hello(): void
    console.log("x");
}
const a = hello();
a.toUpperCase(); // Property 'toUpperCase' does not exist on type 'void'

// never : 함수가 절대 return 하지 않을 때 
function hello() : never {
    // return "x" // Type 'string' is not assignable to type 'never'
    throw new Error("xxx"); // 제대로 동작 O > return 하지 않고 오류를 발생시키는 함수
}

function hi(name: string|number){
    if(typeof name === "string"){
        name; // name: string
    } else if (typeof name === "number"){
        name; // name: number
    } else {
        name; // name: never > 절대 return 되지 않음
    }
}