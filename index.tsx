type Words = {
    [key:string]: string // property의 이름은 모르지만 type을 알때 사용하는 방법
}


class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term]
    }
    static hello(){
        return "hello";
    }
}

class Word {
    constructor (
        public readonly term : string, // readonly를 추가 해줌으로써 값은 보여주나 수정은 불가능하게 만들 수 있다.
        public readonly def : string
    ) {}
}


const kimchi = new Word("kimchi", "한국의 음식");
// kimchi.def = "D"; //Cannot assign to 'def' because it is a read-only property 
const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi");
Dict.hello() // static 메소드