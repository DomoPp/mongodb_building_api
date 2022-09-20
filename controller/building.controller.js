const mongoose = require('mongoose');
const { v4: uuid4 } = require('uuid');
const Schema = mongoose.Schema;
const {validateResult} = require("../utils/validate_result");
const  moment = require('moment');

module.exports.building = {
    getBuilding,
    getBuildingOne,
    saveBuilding,
    updateBuilding,
    deleteBuilding
};
const BuildingDetail = mongoose.model('build_detail', new Schema({
    id: 'string',
    name: 'string',
    detail: 'array',
    date: 'date'
}));

async function getBuilding(req, res, next) {
    try {
        let a = await BuildingDetail.find().select({"id": 2, "name": 1, "_id": 0})
        res.json(a);
    } catch (error) {
        next(validateResult.error(error));
    }
}
async function getBuildingOne(req, res, next) {
    try {
        let a = await BuildingDetail.findOne().where({ id: req?.query?.id})
        res.json(a);
    } catch (error) {
        next(validateResult.error(error));
    }
}

async function saveBuilding(req, res, next) {
    try {
        const b = req.body
        const a = {
            id: uuid4(),
            name: b.name,
            detail: b.detail,
            date: new Date
        }

        await BuildingDetail.create(a)
        res.json(
            {
                message: 'Save Success',
                success: 1
            }
        );
    } catch (error) {
        next(validateResult.error(error));
    }
}
async function updateBuilding(req, res, next) {
    try {
        const b = req.body
        const a = {
            id: b.id,
            name: b.name,
            detail: b.detail,
            date: new Date
        }
        await BuildingDetail.countDocuments({id:b.id});
        await BuildingDetail.findOneAndUpdate({id:b.id}, a, {
            new: true,
            upsert: true
        });
        res.json(
            {
                message: 'Update Success',
                success: 1
            }
        );
    } catch (error) {
        next(validateResult.error(error));
    }
}
async function deleteBuilding(req, res, next) {
    try {
        const b = req.query
        await BuildingDetail.countDocuments({id:b.id});
        await BuildingDetail.findOneAndDelete({id:b.id});
        res.json(
            {
                message: 'Remove Success',
                success: 1
            }
        );
    } catch (error) {
        next(validateResult.error(error));
    }
}

