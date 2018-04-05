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
        console.log('Calculating hash for- ', this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce);
        return calculateHash.getSHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce);
    }

    mineBlock(difficulty) {

    }
}

exports = module.exports = Block;