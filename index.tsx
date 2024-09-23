// call signature shortcut
type Add = (a: number, b: number) => number

call signature longcut
type Add = {
    (a: number, b: number) : number
}

// 오버로딩?
// 함수가 서로 다른 여러개의 call signature을 가지고 있을 때 발생.
// 예시1
type Add = {
    (a: number, b: number) : number
    (a: number, b: string) : number

}
const add : Add = (a, b) => {
    if(typeof b === "string") return a
    return a + b
}

// 예시2
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config); // string인 경우 처리
    } else {
        console.log(config.path); // Config 타입인 경우 처리
    }
};


// 예시3
// call 파마리터의 개수도 다른 경우
type Add = {
    (a:number, b:number): number
    (a:number, b:number, c:number): number
}

const add:Add = (a, b, c?:number) => {
    if(c) return a + b + c
    return a + b
}

add(1,2);
add(1,2,3);