const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'project_jf'
})

app.post('/signup', (req, res) => {
    // Check existed Email
    const checkEmailSql = "SELECT * FROM users WHERE `username` = ?";
    const emailToCheck = req.body.email;

    // Kiểm tra xem email đã tồn tại hay chưa
    db.query(checkEmailSql, [emailToCheck], (err, data) => {
        if (err) {
            return res.json("Error during email check");
        }

        // Nếu đã có email trong cơ sở dữ liệu, trả về lỗi
        if (data.length > 0) {
            return res.json("Email already exists");
        }})


    // Insert User into Database
    const sql = "INSERT INTO users (`username`, `password`) VALUES (?)";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error")
        }
        return res.json(data)
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users where `username` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Failed");
        }
    })
})

app.get('/', (req, res) => {
    return res.json("From Backend Side");
})

app.listen(8081, () => {
    console.log("Listening ....");
})
