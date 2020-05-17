const crypto = require("crypto");

module.exports = function generateUniqID() {
    return crypto.randomBytes(4).toString('HEX');
}