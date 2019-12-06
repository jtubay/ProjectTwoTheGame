const express = require("express");
const router = express.Router();

router.get("/stats", (req, res) => {
  if(!req.user){
      return res.redirect("/")
  }  
  res.render("list/globalStats", { user: req.user });
});

router.post("/api/stats", (req, res) => {
  
})

module.exports = router;
