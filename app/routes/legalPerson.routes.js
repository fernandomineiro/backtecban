module.exports = (app) => {
  const legalPerson = require("../controllers/legalPerson.controller.js");

  const router = require("express").Router();

  router.post("/", legalPerson.create);

  router.get("/", legalPerson.findAll);

  router.get("/:id", legalPerson.findOne);

  router.put("/:id", legalPerson.update);

  router.delete("/:id", legalPerson.delete);

  router.delete("/", legalPerson.deleteAll);

  app.use("/api/legalPerson", router);
};
