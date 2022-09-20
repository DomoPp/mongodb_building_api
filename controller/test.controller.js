const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {validateResult} = require("../utils/validate_result");

module.exports.test = {
    saveTest,
    getTest
};
async function getTest(req, res, next) {
    try {
        const Log = mongoose.model('test', new Schema({
            name: 'string', size: 'string'
        }));
        let a = await Log.find()

        res.json(a);
    } catch (error) {
        next(validateResult.error(error));
    }
}

async function saveTest(req, res, next) {
    try {
        const Log = mongoose.model('test', new Schema({
            name: 'string', size: 'string'
        }));
        await Log.create(req.body)
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
