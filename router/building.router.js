const express = require('express');
const {building} = require('../controller/building.controller')
const router = new express.Router();

router.get('/get-building', building.getBuilding);
router.get('/get-building-one', building.getBuildingOne);
router.post('/save-building', building.saveBuilding);
router.post('/update-building', building.updateBuilding);
router.delete('/delete-building', building.deleteBuilding);

module.exports.buildingR = router;
