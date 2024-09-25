interface SStorage<T> {
    [key:string]: T // key가 제한되지 않은 오브젝트를 정의하게 해줌
}

class LocalStorage<T> {
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

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("key");
stringsStorage.set("hello", "how are you")

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("key");
booleansStorage.set("key", true);