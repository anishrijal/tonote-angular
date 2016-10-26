var express = require('express');
var controller =require('./notes.controller');
var router = express.Router();

router.get('/', controller.allNotesCtrl);

router.post('/',controller.addCtrl);
router.post('/', controller.editCtrl);

module.exports =router;
