// 아래 interface 코드는 `자바스크립트`에서 보여지지 않는다.
interface User {
    firstName : string,
    lastName : string,
    sayHi(name:string):string   
    fullName():string
}

// implements : extends를 쓸때보다 코드가 더 가벼워진다.
// User interface 추적불가 : 인터페이스는 타입스크립트에서만 존재하고 자바스크립트에는 존재하지 않는다.
// interface를 상속할 때에는 프로퍼티를 `private | protected`으로 만들지 못한다. > public 으로만 가능

// interface 추가해보기
interface Human {
    health: number
}

class Player implements User, Human { 
    constructor(
        public firstName : string,
        public lastName  : string,
        public health : number
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }

}