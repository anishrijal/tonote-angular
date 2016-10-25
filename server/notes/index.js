var express = require('express');
var controller =require('./notes.controller.js');
var router = express.Router();

router.get("/",controller.getList);
router.post("/:id",controller.save);
router.post("/",controller.save);
router.delete("/:id",controller.delete);

module.exports = router;
