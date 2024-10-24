import { Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../config/sqlConfig";

export const registerEmployee = async (req: Request, res: Response) => {
  try {
    const { name, email, id_no, password } = req.body;

    const pool = await mssql.connect(sqlConfig);
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
