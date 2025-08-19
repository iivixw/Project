const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASS || "", // ← ว่าง
  database: process.env.DB_NAME || "xampp_db",
});


conn.connect((err) => {
  if (err) {
    console.error("ไม่สามารถเชื่อมต่อฐานข้อมูลได้:", err);
    process.exit(1);
  }
  console.log("MySQL connected!");
});

module.exports = conn;
