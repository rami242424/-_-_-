abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickname: string
    ) {}
    abstract getNickName(): void

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {
    getNickName(){
        console.log(this.nickname)
    }
}

const nico = new Player("nico", "last", "니꼬");
nico.getFullName()
nico.firstName // Property 'firstName' is protected and only accessible within class 'User' and its subclasses.