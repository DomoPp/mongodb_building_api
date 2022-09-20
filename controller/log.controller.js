const {validateResult} = require('../utils/validate_result');
const {PageLog} = require('../database/model/logs_model')

module.exports.userLog = {
    addPageLog
};

async function addPageLog(req, res, next) {
    try {
        const head = req.headers
        const data = {
            serverName: null,
            ipAddress: null,
            host: req.headers.host || null,
            origin: head.routeorigin || null,
            fullPath: head.routeorigin + head.routepath || null,
            user: req.user || null,
            query: req.query || null,
            header: req.headers || null,
            body: req.body || null,
            additionalData: null
        };
        const _logSave = new PageLog.pageLog(data);
        const save = await _logSave.save();
        res.json(
            {
                message: 'Success',
                success: 1
            }
        );
    } catch (error) {
        next(validateResult.error(error));
    }
}
