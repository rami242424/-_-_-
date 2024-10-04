// type과 interface 
// 공통점 : 타입스크립트에게 오브젝트의 모양과 타입을 알려주는 게 목표
// 차이점 : 이용해서 할 수 있는 것이 다름
// 타입 : 타입을 상속하려면 또 다른 타입 하나를 만들어서
// 인터페이스

//?? property에 타입을 추가하고 싶으면?


// type
type PlayerA = {
    name: string
}

type PlayerAA = PlayerA & { // 상속방법
    lastName: string
}

type PlayerAA = { // 타입추가 ❌ Error : Duplicate identifier 'PlayerAA'
    health: number
}
const playerA: PlayerAA = {
    name: "nico",
    lastName: "oh"
}


// interface
interface PlayerB {
    name: string
}

interface PlayerBB extends PlayerB { // 상속방법
    lastName: string
}

interface PlayerBB { // 타입추가 ⭕
    health: number
}

const playerB: PlayerB = {
    name: "nico"
}