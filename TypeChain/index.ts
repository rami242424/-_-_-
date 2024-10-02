type Player<E> = {
    name:string
    extraInfo: E
}

// const nico : Player<{favFood:string}> = {
//     name: "nico",
//     extraInfo: {
//         favFood: "kimchi"
//     }
// }

// 위 코드를 둘로 나눈것 1
// type NicoPlayer = Player<{favFood:string}>
// const nico : NicoPlayer = {
//     name: "nico",
//     extraInfo: {
//         favFood: "kimchi"
//     }
// }

// 위 코드를 둘로 나눈것 2
type NicoPlayer = Player<NicoExtra>
type NicoExtra = {
    favFood: string
}
const nico : NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lynn : Player<null> = {
    name: "lynn",
    extraInfo: null
}