const express = require('express');
const router = express.Router();

const {signup } = require("../controller/user.controller");

// router.get("/getAll", getAll)


router.post("/signup" , signup)


module.exports = router;