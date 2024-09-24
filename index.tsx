
// type SuperPrint = <T>(arr: T[]) => T
// const superPrint: SuperPrint = (a) => a[0];
// 아래 한줄 코드로 변경 가능
function superPrint<T>(a: T[]){return a[0]}

superPrint([1, 2, 3, 4]);
superPrint([true, false, true, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 5, false, "lala"]);
