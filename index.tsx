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
}

class Word {
    constructor (
        public term : string,
        public def : string
    ) {}
}


const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi");