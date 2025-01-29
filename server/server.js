const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();


const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    methods: 'GET,POST,PUT,DELETE',
    credentials:true,
}))

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

app.get('/',(req,res)=> {
    return res.json("From backend");
})

app.get('/products', (req,res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err,data) => {
        if (err) return res.json(err);
        return res.json(data);
    })

})

app.listen(8081,()=> {
    console.log("listening");
})