const router = require("express").Router();

router.get("/", (req, res) => {
  return res.render("home");
});

router.use("/admin", require("./admin"));

router.use("/user", require("./user"));

module.exports = router;
