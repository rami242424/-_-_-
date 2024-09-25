interface User {
    name: string
    // readonly name: string
}

interface Player extends User {   
}

const nico: Player = {
    name: "nico"
}

nico.name = "lalalal" // readonly name: string : readonly 추가되면 출력 불가능해짐
