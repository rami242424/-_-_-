type Age = number;
type Name = string;
type Player = {
    name : Name,
    age ?: Age
}

const nico1 : Player = {
    name : "nico"
}

const lynn = {
    name: "lynn",
    age : 12
}

// 함수에 적용
function playerMaker(name: string) : Player{
    return {
        name
    }
}

const nico = playerMaker("nico");
nico.age = 12;

// 화살표 함수에 적용
const playerMaker2 = (name: string) : Player => {
    return {
        name
    }
}

const nico2 = playerMaker2("rami");
nico2.age = 15;
