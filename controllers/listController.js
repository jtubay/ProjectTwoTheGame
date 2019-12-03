const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  res.render("list/index", { user: req.user });
});

module.exports = router;
