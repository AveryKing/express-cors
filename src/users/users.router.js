const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");


const corsAllowed = cors({methods: "GET"});

router
  .route("/:userId")
  .get(corsAllowed, controller.read)
  .options(corsAllowed)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(corsAllowed, controller.list)
  .options(corsAllowed)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;