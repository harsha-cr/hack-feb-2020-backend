const DBUtil = require("./../config");
const crypto = require("crypto");

class RegisterDAO {

    static addUser(entity) {
        const mysqlConnection = DBUtil;
        if(!mysqlConnection) {
            console.log("Connection Failed");
            return null;
        }
        const sql = "INSERT INTO users SET username = ?, mobile_number = ?, email = ?, password = ?, profile_picture = ?, dob = ?, address = ?, designation_id = ?, status_id = ?, role_id = ? ";
        return new Promise((resolve, reject) => {
            var encryptedPassword = crypto.createHash('sha256').update(entity.password).digest('hex');
            var encryptedemail = crypto.createHash('sha256').update(entity.email).digest('hex');
            var encryptedmobile = crypto.createHash('sha256').update(entity.mobile_number).digest('hex');
            var encryptaddress = crypto.createHash('sha256').update(entity.address).digest('hex');
            mysqlConnection.query(sql, [entity.username, encryptedmobile, encryptedemail, encryptedPassword, entity.profile_picture, entity.dob, encryptaddress, entity.designation_id, entity.status_id, entity.role_id], (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                } else {
                    reject(err);
                }
            });
        });
    }

    static updateStatus(entity) {
        var mysqlConnection = DBUtil;
        if(!mysqlConnection) {
            console.log("Connection Failed")
            return null;
        }
        return new Promise ((resolve, reject) => {
            mysqlConnection.query('UPDATE users SET role_id = ? where user_id = ?', [entity.role_id, entity.user_id], (err, rows, fields) => {
                if(!err) {
                    resolve(rows);
                } else {
                    reject(err);
                }
            });
        });
    }
}

module.exports = RegisterDAO;