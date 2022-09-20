module.exports.validateResult = {
    query,
    error,
};

function query(result) {
    const {
        success,
        message,
    } = result[0];
    if (!(success === 1 || success === true)) throw message;
    result[0].success = result[0].success === 1
    return result[0];
}

function error(e) {
    const err = Error();
    if (e instanceof Error) {
        err.message = e.message;
    } else {
        err.message = e;
    }
    err.statusCode = 400;
    return err;
}

