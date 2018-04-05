const calculateHash = require('./hash.js');
const Block = require('./block.js');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesis()];
    }

    createGenesis() {
        return new Block(0, '0', "Genesis block");
    }

    latestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data){
        let newBlock = new Block(this.chain.length, this.latestBlock().hash, data);
        this.chain.push(newBlock);
    }

    isValid() {
        // Skipping genesis block
        for(let i = 1; i < this.chain.length - 1; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.previousHash !== previousBlock.calculateHash()) {
                return false;
            }
        }
        return true;
    }
}