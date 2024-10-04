// import * as crypto from "crypto"; // or  tsconfig에서 ` "esModuleInterop": true,` 로 설정하기
import crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
} 


// static 함수 : 클래스 안에서 사용하는 함수, 클래스 인스턴스가 없어도 부를 수 있는 함수 (객체지향 프로그래밍)

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash: string, height: number, data: string){
        const toHash = `${prevHash}${height}${data}`;
    }
}