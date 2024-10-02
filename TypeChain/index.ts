// unknown : 변수의 타입을 미리 알지 못 할 때 사용

// void : 아무것도 return하지 않는 함수를 대상으로 사용
function hello(){ // function hello(): void
    console.log("x");
}

//never : 1) 함수가 절대 return 하지 않을 때 발생
function hello2():never{
    // return "x";
    throw new Error("X") // return하지 않고 오류를 발생시키는 함수!
}
//never : 2) 타입이 두가지 일 수도 있는 상황에서 발생
function hello3(name: string|number){
    if(typeof name === "string"){
        name // (parameter) name: string
    } else if(typeof name === "number"){
        name // (parameter) name: number
    } else {
        name // (parameter) name: never -> name은 string이거나 number 둘중에 하나라서!
    }
}