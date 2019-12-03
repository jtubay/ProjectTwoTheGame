const express = require("express");
const router = express.Router();

const db = require("../models/index")

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", (req,res) => {
    
})


module.exports = router;