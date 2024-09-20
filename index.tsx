type Age = number;
type Name = string;

type Player = {
    readonly name: Name, // name 수정 못함
    age?: Age
}

const playerMaker = (name:string) : Player => ({name})

const nico = playerMaker("nico");
nico.age = 12; 
nico.name = "las"; // Cannot assign to 'name' because it is a read-only property

//---

const numbers: readonly number[] = [1,2,3,4]
numbers.push(1) // Property 'push' does not exist on type 'readonly number[]'

// ---
const names: readonly string[] = ["1", "2"];
names.push("3") // Property 'push' does not exist on type 'readonly string[]'

//---
