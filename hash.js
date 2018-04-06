const hash = (() => {
    const crypto = require('crypto');

    let getSHA256 = data => {
        return crypto.createHash('sha256').update(data).digest('hex');
    };

    return {
        getSHA256
    };

})();

exports = module.exports = hash;

