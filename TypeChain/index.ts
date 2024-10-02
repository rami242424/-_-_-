// what is 객체지향 프로그래밍?
class  Player {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
}

const nico = new Player("nico" , "las", "니꼬");
// nico.firstName // Property 'firstName' is private and only accessible within class 'Player'
