const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");

const app = express();

// ใช้การเชื่อมต่อจาก db.js (ซึ่ง connect แล้ว)
const db = require("./db");

// route ทดสอบ DB
app.get("/db-ping", (req, res) => {
  db.query("SELECT 1 AS ok", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ ok: rows[0].ok === 1 });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
