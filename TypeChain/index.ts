// 추상클래스 : 다른 클래스가 상속받을 수 있는 클래스 but 직접 새로운 인스턴스를 만들 수는 없다.
abstract class User{
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class  Player extends User{
}

const nico = new Player("nico" , "las", "니꼬");
nico.getFullName() 
