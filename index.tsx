class Player {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
}

const nico = new Player("nico", "last", "니꼬");
nico.firstName // Property 'firstName' is private and only accessible within class 'Player'.
nico.nickname