// abstract 추상클래스 : 다른 클래스가 상속받을 수 있는 클래스 (but 직접 새로운 인스턴스를 만들 수는 없다.
// => const nico = new User("nico", "last", "니꼬"); // Cannot create an instance of an abstract class.)
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
    // private getFullName(){
        getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {
}

const nico = new Player("nico", "last", "니꼬");
nico.getFullName // private getFullName()이 되면 Property 'getFullName' is private and only accessible within class 'User' 접근 불가.