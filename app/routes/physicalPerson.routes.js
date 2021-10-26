module.exports = (app) => {
  const physicalPerson = require("../controllers/physicalPerson.controller.js");

  const router = require("express").Router();

  router.post("/", physicalPerson.create);

  router.get("/", physicalPerson.findAll);

  router.get("/:id", physicalPerson.findOne);

  router.put("/:id", physicalPerson.update);

  router.delete("/:id", physicalPerson.delete);

  router.delete("/", physicalPerson.deleteAll);

  app.use("/api/physicalPerson", router);
};
