const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.physicalPerson = require("./physicalPerson.model.js")(mongoose);
db.checkingAccount = require("./checkingAccount.model.js")(mongoose);
db.creditCard = require("./creditCard.models")(mongoose);
db.financing = require("./financing.models")(mongoose);
db.legalPerson = require("./legalPerson.model.js")(mongoose);
db.loan = require("./loan.model.js")(mongoose);
module.exports = db;
