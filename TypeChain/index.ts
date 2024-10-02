type SuperPrint = {
    (arr: number[]):void
    (arr: boolean[]):void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4])
superPrint([true, false, false])
superPrint(["a", "b"]) // Generic을 통해 간결하게 만들어보자

// Generic : call signature을 작성 하려고 하는데 확실한 타입을 모를 떄