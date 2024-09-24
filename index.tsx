
type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void
    (arr: string[]): void
    
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i));
}

superPrint([1, 2, 3, 4]);
superPrint([true, false, true, true]);
superPrint(["a", "b", "c"]);

위의 방법처럼 하면 너무 길어진다 -> Generic을 이용하자 (확실한 타입을 모를 때 사용)

#3.2 Polymorphism
Generic 사용하기 // 제네릭 표시를 보고 타입스크립트가 타입을 유추한다.
type SuperPrint = {
    <TypePlaceHolder>(arr: TypePlaceHolder[]): TypePlaceHolder 
    // step1 제네릭 사용할거라고 표시하기(</TypePlaceHolder>)
}
위의 코드 shortcut
type SuperPrint = {
    <T>(arr: T[]): T
}
const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4]);
superPrint([true, false, true, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 5, false, "lala"]);

// step2
const a = superPrint([1, 2, 3, 4]); // const a: number
const b = superPrint([true, false, true, true]); // const b: boolean
const c = superPrint(["a", "b", "c"]); // const c: string
const d = superPrint([1, 5, false, "lala"]); // const d: string | number | boolean