const Dbutil = require("../config");

class LoginDao{

    static login(entity) {
        const mysqlConnection = DBUtil;
        if(!mysqlConnection) {
            console.log("Connection Failed");
            return null;
        }
        return new Promise ((resolve, reject) => {
            mysqlConnection.query('SELECT * FROM users WHERE mobile_number = ? AND email = ? AND password = ?', [entity.mobile_number, entity.email, entity.password], (err, rows, fields) => {
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