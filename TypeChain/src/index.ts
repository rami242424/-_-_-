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
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class BlockChain {
    private blocks: Block[];
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length - 1].hash
    }
    public addBlock(data: string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data) // 새로운 블록 생성
        this.blocks.push(newBlock);
    }
    // 블록에 접근할 수 있는 함수
    public getBlocks(){
        // return this.blocks; // 이렇게하면 해킹가능(다른사람이 수정가능)
        return [...this.blocks];
    }
}

const blockchain = new BlockChain();

blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");
blockchain.addBlock("forth one");

// 짭 데이터
blockchain.getBlocks().push(new Block("가짜지롱", 79787, "해킹됐다"))

// 모든 블록을 반환
console.log(blockchain.getBlocks());