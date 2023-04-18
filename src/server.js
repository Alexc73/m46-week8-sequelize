require("dotenv").config();
const express = require("express");

const port = process.envPORT || 5001;

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({message: "App is healthy"});
});

app.listen(port, () => {
    console.log("Server is listening")
});