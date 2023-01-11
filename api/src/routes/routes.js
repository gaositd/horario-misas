require("dotenv").config();
const { Router } = require("express");
const router = Router();

// const common = require('./commonRoutes/commonRoutes.js');
const web = require("./routesWeb/routesWeb.js");
// const mobile = require('./routesMobile/routesMobile.js');

// router.use('/common', common);
router.use("/web", web);
// router.use('/mobile', mobile);

router.use("/", (req, res) => {
  res.send(process.env.RUNNING);
});

module.exports = router;
