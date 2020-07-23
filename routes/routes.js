const express = require("express");
const transactionRouter = express.Router();
const accountController = require("../services/transactionService.js");

transactionRouter.post("/deposito", accountController.deposito);
transactionRouter.post("/saque", accountController.saque);
transactionRouter.post("/transferencia", accountController.transferencia);
transactionRouter.post("/saldo", accountController.saldo);

transactionRouter.get("api/transaction/:period", accountController.transiction);
transactionRouter.get("/media/:agencia", accountController.media);
transactionRouter.get("/ranking/:order/:limit", accountController.ranking);
transactionRouter.get("/private", accountController.private);

transactionRouter.delete("/conta", accountController.deletarConta);

module.exports = transactionRouter;
