const express = require("express");
const mongodb = require("mongodb");
//Reqiere de camisetas router
const camisetas = require("../Proyecto/routes/camisetas");

let app = express();
app.use('/camisetas', camisetas) //ahora no hace falta"/" Hay que poner camisetas/camisetas

app.listen(3005);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let db;
let MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/", function(err, client) {
    if (err !== undefined) {
        console.log(err);
    } else {
        app.locals.db = client.db("tienda") //**********
    }
});

//Nuestra base de datos 
app.get("/", function(req, res) {
    let r = req //para utilizar metodo metodo request
    res.send("camisetas");
});

//para: camisetas, pantalones, calsonsillos, calsetines rep.sent: "Esta esta la lista de pantalones(cambiamos para cada uno)"
app.get("/pantalones", function(req, res) {
    let r = req
    res.send("Esta es la lista de pantalones");
});
app.get("/calsonsillos", function(req, res) {
    let r = req
    res.send("Esta es la lista de calsonsillos");
});
app.get("/calsetines", function(req, res) {
    let r = req
    res.send("Esta es la lista de calsetines");
});

//Cuatro metodos insert(post con un preudo codigo)
app.post("/pantalones", function(req, res) {
    let r = req
    res.send("Esta es la lista de pantalones");
});
app.post("/calsonsillos", function(req, res) {
    let r = req
    res.send("Esta es la lista de calsonsillos");
});
app.post("/calsetines", function(req, res) {
    let r = req
    res.send("Esta es la lista de calsetines");
});

//Cuatro metodos put para cada elemento de la tienda
app.put("/pantalones", function(req, res) {
    let r = req
    res.send("Esta es la lista de pantalones");
});
app.put("/calsonsillos", function(req, res) {
    let r = req
    res.send("Esta es la lista de calsonsillos");
});
app.put("/calsetines", function(req, res) {
    let r = req
    res.send("Esta es la lista de calsetines");
});

//Cuatro metodos delete para cada elemento de la tienda
app.delete("/pantalones", function(req, res) {
    let r = req
    res.send("Esta es la lista de pantalones");
});
app.delete("/calsonsillos", function(req, res) {
    let r = req
    res.send("Esta es la lista de calsonsillos");
});
app.delete("/calsetines", function(req, res) {
    let r = req
    res.send("Esta es la lista de calsetines");
});
// /camisetas - metodod get en las camisetas