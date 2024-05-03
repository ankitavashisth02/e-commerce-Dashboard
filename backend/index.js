const express = require('express');
const app = express();
require("./db/conn");
const User = require("./db/User");
const cors = require('cors');

app.use(cors());

app.get("/", (req,res)=>{
    res.send("Hello World!");
});

app.use(express.json());

app.post("/register", async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
});

app.listen(5000);