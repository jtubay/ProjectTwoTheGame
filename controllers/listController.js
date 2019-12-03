const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
    if(!res.user) {
        return res.redirect("/")
    }
    
  res.render("list/index", { user: req.user });
});

module.exports = router;
