type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

// type과 interface

// type
// type Player = {
//     nickname: string,
//     team: Team,
//     health: Health
// }

// interface
interface Player {
    nickname: string,
    team: Team,
    health: Health
}

const nico : Player = {
    nickname: "nico",
    team : "blue",
    health: 10
}


























