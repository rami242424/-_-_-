// 다형성 : 다른 모양의 코드를 가질 수 있게 해 주는 것
// 다형성을 이룰 수 있는 방법 : 제네릭 사용!
// 제네릭 : placeholder 타입을 쓸 수 있도록 해줌(not concrete type!) -> 같은 코드를 다른 타입에 대해서 쓸 수 있도록 해준다.


// 로컬스토리지 API 따라해보기 : 제네릭으로
interface SStorage<T> {
    [key:string]
}

class LocalStrotage<T> {
    private storage : SStorage<T> = {}
    set(key:string, value:T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

// LocalStrotage class를 쓰고 싶다면 아래와 같이 만들어야한다.
const stringsStorage = new LocalStrotage<string>()
stringsStorage.get("key") //  LocalStrotage<string>.get(key: string): string 
stringsStorage.set("hello", "how are you")

const booleansStorage = new LocalStrotage<boolean>()
booleansStorage.get("key") //  LocalStrotage<boolean>.get(key: string): boolean
booleansStorage.set("hello", true)