const express = require("express");
const router = express.Router();
const { taskCtrl } = require("../controller");


router.get("/", taskCtrl.getAll);

router.get("/:listId", taskCtrl.getByListId);

router.post("/add", taskCtrl.create);

router.put("/changeStatus/:id", taskCtrl.changeStatus);

router.delete("/delete/:id", taskCtrl.delete);


module.exports = router;