import crypto from "crypto";
// 만약 crypto를 찾을 수 없다는 에러가 나오면

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    // return this.blocks;  // 보안상의 이슈로 this.blocks를 리턴하면 안된다.
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock('First one');
blockchain.addBlock('Second one');
blockchain.addBlock('Third one');
blockchain.addBlock('Fourth one');

blockchain.getBlocks().push(new Block('xxxx', 1111, 'HACKED'));

console.log(blockchain.getBlocks());
