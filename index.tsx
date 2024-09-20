// tuple : 특정위치에 특정타입이 있어야함

// const player: [string, number, boolean] = ["nico", 12, false]
// player[0] = 1 // Type 'number' is not assignable to type 'string'

//---
const player: readonly [string, number, boolean] = ["nico", 12, false]
player[0] = "hi" // Cannot assign to '0' because it is a read-only property.