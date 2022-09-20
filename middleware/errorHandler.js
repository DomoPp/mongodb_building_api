const {DatabaseError, ConnectionTimedOutError} = require('sequelize');
const pm2 = require('pm2');
module.exports = (error, req, res, next) => {
    console.log(error);
    try {
        const status = error.statusCode || 500;
        const message = error.message;
        const detail = error.detail;
        const data = {
            status: status, message: message, detail: detail,
        };
        if (message instanceof ConnectionTimedOutError) {
            pm2.restart(undefined, undefined);
        } else if (message instanceof DatabaseError) {
            data.message = message.message;
        } else if (message instanceof Error) {
            data.message = message.message;
        }
        const {transaction} = req.body;
        try {
            if (transaction) transaction.rollback().then(r => r);
        } catch (error) {
        }
        console.error(data);
        return res.status(status).json(data);
    } catch (e) {
        console.error(e);
        return res.status(500).json(e);
    }
};
