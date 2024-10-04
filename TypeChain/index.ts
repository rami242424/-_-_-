// type과 interface 
// 공통점 : 타입스크립트에게 오브젝트의 모양과 타입을 알려주는 게 목표
// 차이점 : 이용해서 할 수 있는 것이 다름
// 타입
// 인터페이스


// type
type PlayerA = {
    name: string
}
const playerA: PlayerA = {
    name: "nico"
}


// interface
interface PlayerB {
    name: string
}

const playerB: PlayerB = {
    name: "nico"
}