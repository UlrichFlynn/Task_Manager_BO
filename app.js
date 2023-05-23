const express = require("express");
const app = express();
const mongoose = require("./db_connection");

const projectRoutes = require("./src/route");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());    // this will allow our application to use JSON data
app.use(projectRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});