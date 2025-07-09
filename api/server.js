require('dotenv').config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mysql = require("mysql");
const multer = require("multer");
const app = express();

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",      // เปลี่ยนจาก localhost เป็น .env
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "clean_city_db",
  port: process.env.DB_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.error("ไม่สามารถเชื่อมต่อฐานข้อมูลได้:", err);
    return;
  }
  console.log("เชื่อมต่อกับฐานข้อมูลเรียบร้อย");
});
