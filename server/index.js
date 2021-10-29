const express = require('express')
const app = express()
const db = require("./db");


app.get("/", (req, res) =>{

    const sqlInsert = "INSERT INTO users( name, email, password, phone, address) VALUES ( 'muzeyyen', 'alkapmuzeyyen@sabanciuniv.edu', '1234', 505, 'Sabanci Uni');";
    db.query(sqlInsert, (err, result) => 
    {
        res.send("hello my database in");
    });
    res.send("hello my database");
});




app.listen(3001, () =>{
    console.log("Running on port 3001.");
})
