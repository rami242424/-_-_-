// 아래 두 함수 합쳐놓은 것
function superPrint<T>(a: T[]){
    return a[0]
}

// type SuperPrint = {
//     <T>(arr: T[]): T
// }
// const superPrint: SuperPrint = (arr) => arr[0]

const a = superPrint<number>([1,2,3,4])
const b = superPrint([true, false, false])
const c = superPrint(["a", "b"])
const d = superPrint([1, 2, "a", "b", true])