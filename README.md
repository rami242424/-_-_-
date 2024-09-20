자바스크립트 : 코드를 실행하기 전에는 에러인지 모른다

const playerNico : {
    name: string,
    age?: number
} = {
    name: "nico"
}

const playerLynn : {
    name: string,
    age?: number
} = {
    name: "lynn",
    age: 12
}

// Alias(별칭) 타입을 생성해서 중복을 없애자
type Player = {
    name: string,
    age?: numer
}

const nico : Player = {
    name: "nico",
}

const lynn : Player = {
    name: "lynn",
    age: 12
}


// Age Alias(별칭)도 만들 수 있다.
type Age = number;
type Name = string;

type Player = {
    name: Name,
    age?: Age
}

const nico : Player = {
    name: "nico",
}

const lynn : Player = {
    name: "lynn",
    age: 12
}

---
type Age = number;
type Name = string;

type Player = {
    name: Name,
    age?: Age
}

function playerMaker(name:string){
    return {
        // name:name
        name
    }
}

const nico = playerMaker("nico"); // 제대로 출력 O
nico.age = 12 // 제대로 출력 X > playerMaker에 age없어서

---
but
type Age = number;
type Name = string;

type Player = {
    name: Name,
    age?: Age
}

function playerMaker(name:string) : Player {
    return {
        // name:name
        name
    }
}

const nico = playerMaker("nico"); // 제대로 출력 O
nico.age = 12 // 제대로 출력 O > playerMaker에 type이 Player이고, Player에 age값 있음

---
화살표 함수
type Age = number;
type Name = string;

type Player = {
    name: Name,
    age?: Age
}

function playerMaker = (name:string) => ({name})

const nico = playerMaker("nico");
nico.age = 12; // 제대로 출력 X > playerMaker에 age없어서

그래서!! 수정본
화살표 함수
type Age = number;
type Name = string;

type Player = {
    name: Name,
    age?: Age
}

function playerMaker = (name:string) : Player => ({name})

const nico = playerMaker("nico");
nico.age = 12; 