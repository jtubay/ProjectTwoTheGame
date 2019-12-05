const express = require("express");
const router = express.Router();

const db = require("../models/index");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      age: req.body.age,
      class: req.body.class

  }).then((user) => {
      console.log(user);
    res.redirect("/login");
  });
  //res.render("auth/register");
});

router.post("/login", (req, res) => {
  db.User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        return res.render("auth/login", {
          error: "Invalid email or password, please try again."
        });
      }

      if (user.password !== req.body.password) {
        return res.render("auth/login", {
          error: "Invalid email or password, please try again."
        });
      }

      req.session.userId = user.id;
      res.redirect("/list");
    })
    .catch(err => {
      console.log(err);
    });
  //res.render("auth/login");
});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) throw err;
    res.redirect("/");
  });
});

router.get("/api/currentUser", (req, res) => {
  res.json(req.user);
});

router.get("/api/class/:class", (req, res) => {
  const klass = req.params.class
  console.log(klass)
    db.Class.findOne({ where: {name: klass} }).then (data => {
      res.json(data);
    });
});

module.exports = router;
