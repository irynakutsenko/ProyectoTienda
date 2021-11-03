//creamos 
const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    let db = req.app.locals.db //************
    res.send("Esta es la lista de camisetas");
});

router.post("/", function(req, res) {
    let db = req.app.locals.db
    res.send("Esta es la lista de camisetas");
});

router.put("/:patata", function(req, res) {
    let n = req.params.patata //para que hacer un valor que se llama :patata y cuando añadimos en localhost/verde = se guarda en el valor patata valor verde
    let db = req.app.locals.db
    res.send("Esta es la lista de camisetas");
});

router.delete("/", function(req, res) {
    let db = req.app.locals.db
    res.send("Esta es la lista de camisetas");
});

module.exports = router //como esto es un objeto no hace falta ni llaves{}