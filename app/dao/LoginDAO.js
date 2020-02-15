const DBUtil = require("../config");
const crypto = require('crypto');

class LoginDao{

    static login(entity) {
        const mysqlConnection = DBUtil;
        if(!mysqlConnection) {
            console.log("Connection Failed");
            return null;
        }
        return new Promise ((resolve, reject) => {
            const decryptedmobile = crypto.createHash("sha256").update(entity.mobile_number).digest('hex');
            const decryptedemail = crypto.createHash('sha256').update(entity.email).digest('hex');
            const decryptedpassword = crypto.createHash('sha256').update(entity.password).digest('hex');
            mysqlConnection.query('SELECT * FROM users WHERE mobile_number = ? AND email = ? AND password = ?', [decryptedmobile, decryptedemail, decryptedpassword], (err, rows, fields) => {
                if (rows && rows.length > 0) {
                    resolve(rows[0]);
                 } else {
                    reject(err);
                 }
            });
        });
    }

}
module.exports = LoginDao;