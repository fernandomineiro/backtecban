module.exports = (app) => {
  const creditCard = require("../controllers/creditCard.controller.js");

  const router = require("express").Router();

  router.post("/", creditCard.create);

  router.get("/", creditCard.findAll);

  router.get("/:id", creditCard.findOne);

  router.put("/:id", creditCard.update);

  router.delete("/:id", creditCard.delete);

  router.delete("/", creditCard.deleteAll);

  app.use("/api/creditCard", router);
};
