const express = require("express");
const router = express.Router();
const passport = require("../passport");

/* Custom passport callback. */
router.post("/signup", (req, res, next) => {
  passport.authenticate("local-signup", function(error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Oops something happened",
      });
    }
    return res.json(user);
  })(req, res, next);
});

router.post("/signin", function(req, res, next) {
  passport.authenticate("local-signin", function(error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Oops something happened",
      });
    }
    return res.json(user);
  })(req, res, next);
});

module.exports = router;
