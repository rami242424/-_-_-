type Age = number;
type Name = string;
type Player = {
    name: Name,
    age?: Age
}

function playerMaker1 (name: string) : Player{
    return{
        name
    }
}
// 화살표 함수
const playerMaker2 = (name:string) : Player => ({name})

const nico = playerMaker1("nico")
nico.age = 12