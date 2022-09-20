const express = require('express') ;
const { userLog } = require('../controller/log.controller')
const { test } = require('../controller/test.controller')
const router = new express.Router() ;

router.post('/add', userLog.addPageLog);
router.post('/save-test', test.saveTest);
router.get('/get-test', test.getTest);

module.exports.userLogRouter = router;
