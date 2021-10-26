module.exports = (app) => {
  const checkingAccount = require("../controllers/checkingAccount.controller");

  const router = require("express").Router();

  router.post("/", checkingAccount.create);

  router.get("/", checkingAccount.findAll);

  router.get("/:id", checkingAccount.findOne);

  router.put("/:id", checkingAccount.update);

  router.delete("/:id", checkingAccount.delete);

  router.delete("/", checkingAccount.deleteAll);

  app.use("/api/checkingAccount", router);
};
