import mssql from "mssql";
import dotenv from "dotenv";

dotenv.config();

// const sql = require("mssql");
export const sqlConfig = {
  user: "sa",
  password: "Adom@3334",
  database: "REMEMBER ME",
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export async function TestConnection() {
  const pool = await mssql.connect(sqlConfig);

  if (pool.connected) {
    console.log("connected to database");
  }
}
