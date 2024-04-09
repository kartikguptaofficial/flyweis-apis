class ErrorWarning extends Error {
    constructor(message, data = {}) {
        super(message);
        this.name = "ErrorWarning";
        this.public_data = data;
    }
}

class ErrorInvalidPayload extends Error {
    constructor(message, error = {}, data = {}) {
        super(message);
        this.name = "InvalidPayload";
        this.public_data = data;
        this.error = error;
    }
}

export {
    ErrorWarning,
    ErrorInvalidPayload
}