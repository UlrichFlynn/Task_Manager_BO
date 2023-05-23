const express = require("express");
const router = express.Router();
const { listCtrl } = require("../controller");


router.get("/", listCtrl.getAll);

router.get("/:id", listCtrl.getById);

router.post("/add", listCtrl.create);

module.exports = router;