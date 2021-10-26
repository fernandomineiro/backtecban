module.exports = (app) => {
  const financing = require("../controllers/financing.controller.js");

  const router = require("express").Router();

  router.post("/", financing.create);

  router.get("/", financing.findAll);

  router.get("/:id", financing.findOne);

  router.put("/:id", financing.update);

  router.delete("/:id", financing.delete);

  router.delete("/", financing.deleteAll);

  app.use("/api/financing", router);
};
