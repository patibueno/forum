const express = require("express");
const router = express.Router();

const OpnionController = require('../controllers/OpinionController')

router.get("/", OpnionController.showOpinions);

module.exports = router;
