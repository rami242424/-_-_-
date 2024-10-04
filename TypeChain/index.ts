// 추상클래스 대체하는 방법

type PlayerA = {
    firstName: string
}
class User1 implements PlayerA {
    constructor(
        public firstName: string
    ){}
}

interface PlayerB {
    firstName: string
}
class User2 implements PlayerB {
    constructor(
        public firstName: string
    ){}
}

// 클래스나 오브젝트의 모양을 정의하고 싶으면 > type
// 그외의 경우 > interface 