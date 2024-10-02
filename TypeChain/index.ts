// 타입 사용방법1
type Player1 = {
    nickname: string,
    healthBar: number
}
const nico1 : Player1 = {
    nickname: "nico1",
    healthBar: 10
}


// 타입 사용방법2
type Food = string;
const kimchi : Food = "delicious"


// 타입 사용방법3
type Nickname = string
type Health = number
type Friends = Array<string> // type Friends = string[]

type Player2 = {
    nickname: Nickname,
    healthBar: Health
}
const nico2 : Player2 = {
    nickname: "nico2",
    healthBar: 10
}
