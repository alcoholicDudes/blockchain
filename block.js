const calculateHash = require('./hash.js');

class Block {
    constructor(index, previousHash, data) {
        this.index = index;
        this.timestamp = Date.now();
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return calculateHash.getSHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce);
    }

    mineBlock(difficulty) {

    }
}

exports = module.exports = Block;