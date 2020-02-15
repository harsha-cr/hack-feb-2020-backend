class APIResponse {
    constructor(statusCode, message, metaData) {
        this.statusCode = statusCode;
        this.message = message;
        this.metaData = metaData;
    }
    static sendResponse(respObj, statusCode = 200, message = '', metaData = null) {
        if (!respObj) {
            return null;
        }
        const response = new APIResponse(statusCode, message, metaData);
        respObj.statusCode = statusCode;
        respObj.send(response);
    }
}
module.exports = APIResponse;