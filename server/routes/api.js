const router = require("express").Router();
const ctrls = require("../controllers");

router.get("/", ctrls.root);

module.exports = router;
