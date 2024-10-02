type Team = "red" | "blue" | "black"
type Health = 1 | 5 | 4
type Player = {
    nickname : string,
    team: Team,
    health: Health
}

const nico : Player = {
    nickname: "nico",
    team: "blue",
    health: 4
}