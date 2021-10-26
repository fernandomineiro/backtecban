module.exports = (app) => {
  const loan = require("../controllers/loan.controller.js");

  const router = require("express").Router();

  router.post("/", loan.create);

  router.get("/", loan.findAll);

  router.get("/:id", loan.findOne);

  router.put("/:id", loan.update);

  router.delete("/:id", loan.delete);

  router.delete("/", loan.deleteAll);

  app.use("/api/loan", router);
};
