const { Router } = require("express");
const { login } = require("../login/router");
const bcrypt = require("bcrypt");
const User = require("./model");

const router = new Router();

router.post("/signup", (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  };
  User.findOne({ where: { email: req.body.email } }).then(data => {
    if (data) {
      res.status(400).send({
        message: "This email is already in use"
      });
    } else {
      User.create(user)
        .then(user => login(res, next, user.name, req.body.password))
        .catch(err => next(err));
    }
  });
});

module.exports = router;
