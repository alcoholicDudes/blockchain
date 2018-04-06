const hash = require('./hash.js');

let difficulty = 6;

function isHashValid(hash) {
    for (let i = 0; i < difficulty; i++) {
        if (hash.charAt(i) !== '0') {
            return false;
        }
    }
    return true;
}

// Function is squeezed to make it efficient
// This function takes approx 45 seconds to mine with difficulty 6
function getNonce(metadata) {
    let nonce = 0;
    while (!isHashValid(hash.getSHA256(metadata + nonce))) {
        nonce++;
    }
    return nonce--;
}