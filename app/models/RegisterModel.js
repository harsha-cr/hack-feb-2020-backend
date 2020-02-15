const JOI = require('joi');

class RegisterModel {
    constructor(user_id, username, mobile_number, email, password, profile_picture, dob, address, designation_id, status_id, role_id) {
        this.user_id = user_id;
        this.username = username;
        this.mobile_number = mobile_number;
        this.email = email;
        this.password = password;
        this.profile_picture = profile_picture;
        this.dob = dob;
        this.address = address;
        this.designation_id = designation_id;
        this.status_id = status_id;
        this.role_id = role_id;
    }

    static getValidationSchema() {
        return {
            user_id : JOI.required().number().min(1),
            username : JOI.required().string().min(2),
            mobile_number : JOI.required().number().min(1),
            email : JOI.required().string().min(1),
            password : JOI.required().string().min(5),
            profile_picture : JOI.string().min(1),
            dob : JOI.required().date(),
            address : JOI.required().string().min(2),
            designation_id : JOI.required().number().min(1),
            status_id : JOI.required().number().min(1),
            role_id : JOI.required().number().min(1)
        }
    }
    static isValid(obj) {
        if(!obj) 
        return false;
     return JOI.validate(obj, RegisterModel.getValidationSchema());
    }
    static getObjectFromRequest(reqBody) {
        if(!reqBody) {
        return null;
            }
        const entityType = new RegisterModel(reqBody["user_id"] || null, reqBody["username"] || null, reqBody["mobile_number"] || null, reqBody["email"] || null, reqBody["password"] || null, reqBody["profile_picture"] || null, reqBody["dob"] || null, reqBody["address"] || null, reqBody["designation_id"] || null, reqBody["status_id"] || null, reqBody["role_id"] || null);
        return RegisterModel.isValid(entityType, RegisterModel.getValidationSchema()) ? entityType : null;
        }
}
module.exports = RegisterModel;