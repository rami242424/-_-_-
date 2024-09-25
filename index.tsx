// type 사용방법1 : object식
// type Player = {
//     nickname : string,
//     healthBar: number
// }

// const nico: Player = {
//     nickname:"nico",
//     healthBar: 10
// }

// type 사용방법2
// type Food = string;
// const kimchi:Food = "delecious";

// type 사용방법3
// type Nickname = string;
// type Health = number;
// type Friends = Array<string>

// type Player = {
//     nickname : Nickname,
//     healthBar: Health
// }

// const nico: Player = {
//     nickname:"nico",
//     healthBar: 10
// }

// type 사용방법4
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player = {
    nickname: string,
    team: Team,
    health: Health
}

const nico : Player = {
    nickname: "nico",
    // team: "pink", // Type '"pink"' is not assignable to type 'Team'.
    team : "blue",
    health: 10
}


























