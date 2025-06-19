import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg"; // PostgreSQL client for Node.js

// Create a connection pool to Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: {
    rejectUnauthorized: false, 
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      // Query the Neon database to check if the email exists
      const result = await pool.query("SELECT * FROM users WHERE email = ", [email]);

      if (result.rows.length > 0) {
        // Email exists in the database
        res.status(200).json({ message: "Login successful!", user: result.rows[0] });
      } else {
        // Email not found
        res.status(404).json({ message: "Email not found in the database." });
      }
    } catch (error) {
      console.error("Error querying the database:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}