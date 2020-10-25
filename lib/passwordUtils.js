const crypto = require('crypto');
const { hasUncaughtExceptionCaptureCallback } = require('process');

// TODO
function validPassword(password, hash, salt) {
    let hashVerify = crypto.pbkdf2Sync(password, salt,  10000, 64, 'sha512').toString('hex')
    return hash === hashVerify
}
function genPassword(password) {
    console.log('hey')
    let salt = crypto.randomBytes(32).toString('hex')
    console.log('hsey')

    let genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    console.log('hessy')

    
    return{ 
        salt, 
        hash:genHash
    }
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;