const DBUtil = require("./../config");


class RegisterDAO {

    static addUser(entity) {
        const mysqlConnection = DBUtil;
        if(!mysqlConnection) {
            console.log("Connection Failed");
            return null;
        }
        const sql = "INSERT INTO users SET username = ?, mobile_number = ?, email = ?, password = ?, profile_picture = ?, dob = ?, address = ?, designation_id = ?, status_id = ?, role_id = ? ";
        return new Promise((resolve, reject) => {
            mysqlConnection.query(sql, [entity.username, entity.mobile_number, entity.email, entity.password, entity.profile_picture, entity.dob, entity.address, entity.designation_id, entity.status_id, entity.role_id], (err, rows, fields) => {
                if(!err){
                    resolve(rows);
                } else {
                    reject(err);
                }
            });
        });
    }
}

module.exports = RegisterDAO;