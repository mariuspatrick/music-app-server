const { Router } = require("express");
const { toJWT } = require("../signup/jwt");
const User = require("../signup/model");
const bcrypt = require("bcrypt");
// const auth = require("./auth");

function login(res, next, email = null, password = null) {
  if (!email || !password) {
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  } else {
    User.findOne({ where: { email: email } })
      .then(user => {
        if (!user) {
          res.status(400).send({
            message: "User with that name does not exist"
          });
        } else if (bcrypt.compareSync(password, user.password)) {
          res.send({
            jwt: toJWT({ userId: user.id }),
            name: user.name,
            id: user.id
          });
        } else {
          res.status(400).send({
            message: "Password was incorrect"
          });
        }
      })
      .catch(err => {
        next(err);
      });
  }
}

const router = new Router();

router.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  login(res, next, email, password);
});

// router.get("/secret", auth, (req, res) => {
//   res.send({
//     message: `Thanks for visiting the secret endpoint ${req.user.name}.`
//   });
// });

module.exports = { router, login };
