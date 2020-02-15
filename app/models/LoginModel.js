
const JOI = require('joi');

class LoginModel {
    constructor(email, password, status){
        this.email = email;
        this.password = password;
        this. status = status;
    }

    static getValidation(){
        return{
            username : JOI.string().required(),
            password : JOI.string().required(),
            status : JOI.string().required()
        };
    }

    static isValid(obj){
        if(!obj)
        return false;
        return JOI.validate(obj, LoginModel.getValidation());
    }

    static getObjectFromReq(reqBody){
        if(!reqBody){
            return null;
        }

        const entityType = new LoginModel(reqBody["email"] || null, reqBody["password"] || null, reqBody["status"] || null);
        return LoginModel.isValid(entityType, LoginModel.getValidation() ? entityType : null);
    }
}
module.exports = LoginModel;