// call signature
// 1) function 함수
function add1(a:number, b:number){ // function add(a: number, b: number): number
    return a + b
}

// 2) 화살표 함수
const add2 = (a:number, b:number) => a + b // const addd: (a: number, b: number) => number

// call signature 선언하는 방법 (shortcut)
type Add1 = (a:number, b:number) => number;

const add3: Add1 = (a,b) => a + b // type Add = (a: number, b: number) => number

// call signature (longway) -> 오버로딩 때문에 필요함
// 오버로딩 : 함수가 서로 다른 여러개의 call signature을 가지고 있을 때 발생
type Add = {
    (a: number, b:number) : number
    (a: number, b:string) : number
}
// const add: Add = (a,b) => a + b // 에러남
const add: Add = (a, b) => {
    if(typeof b === "string") return a 
    return a + b
}

// Next.js에서의 오버로딩 예시
// 주소 변경하는 두가지 방법
// 방법1
// Router.push({
//     path: "/home",
//     state: 1
// }) 
// 방법2
// .push("/home");

// 방법3
type Config = {
    path : string;
    state : object;
}

type Push = {
    (path:string):void; 
    (config: Config):void;
}

const push: Push = (config) => { // (parameter) config: string | Config
    if(typeof config === "string") { console.log(config)}
    else {
        console.log(config.path, config.state)
    }
}

// 다른 여러개의 argument를 가지고 있을 때 발생하는 효과


// 다른 개수의 파라미터를 가지게 되었을 경우
// -> 나머지 파라미터도 타입을 지정해줘야한다.
type Addd = {
    (a:number, b:number): number,
    (a:number, b:number, c:number): number,
}

const addd:Addd = (a, b, c?:number) => {
    if(c) return a + b + c
    return a + b
}

addd(1, 2);
addd(1, 2, 3);