// function add(a: number, b: number): number
// function add (a:number, b:number){
//     return a + b;
// }

// const add: (a: number, b: number) => number
// const add = (a:number, b:number) => a + b

// call signature : 함수 위에 마우스를 올렸을 때 보게 되는 것
type Add = (a:number, b:number) => number;
const add: Add = (a, b) => a + b; // => number
const addd: Add = (c, d) => c + d; // => number
const lala: Add = (x, y) => x + y; // => number

