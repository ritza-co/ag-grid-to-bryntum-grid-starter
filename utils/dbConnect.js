import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect(function (err) {
  if (err) {
    console.log(process.env.HOST, process.env.USER);
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
