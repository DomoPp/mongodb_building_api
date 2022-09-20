const express = require('express');
const {userLogRouter} = require('./log.router');
const {buildingR} = require('./building.router');

const router = new express.Router();
router.use('/building', buildingR);
router.use('/log', userLogRouter);
module.exports.routeV1 = router;
