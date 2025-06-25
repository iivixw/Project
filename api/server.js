const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mysql = require("mysql");
const multer = require("multer"); // เพิ่มการใช้งาน multer
const app = express();
const SECRET_KEY = "your-secret-key";

// ตั้งค่าการเชื่อมต่อฐานข้อมูล MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // แทนที่ด้วย username ของคุณ
  password: "", // แทนที่ด้วย password ของคุณ
  database: "clean_city_db", // ชื่อฐานข้อมูล
});

db.connect((err) => {
  if (err) {
    console.error("ไม่สามารถเชื่อมต่อฐานข้อมูลได้:", err);
    return;
  }
  console.log("เชื่อมต่อกับฐานข้อมูลเรียบร้อย");
});

