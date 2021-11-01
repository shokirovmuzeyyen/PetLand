const express = require('express')
const cors = require('cors')
const app = express()
const db = require("./db");
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    console.log("backend");
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address
    const password = req.body.password
    db.query("INSERT INTO users (name, email, phone, address, password) VALUES ($1,$2,$3,$4,$5)", [name, email, phone, address, password], (err, result) => {
        console.log(err);
    }
    );
});


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
