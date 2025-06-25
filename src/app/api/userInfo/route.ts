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
  if (req.method === "GET") {
     const { userId } = req.query;
    // const {email} = req.query;
    // const {location} = req.query;
    // const {team_name} = req.query;
    // const {username} = req.query;

    try {
      // Query the database for the current user
      const userResult = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);

      if (userResult.rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      const currentUser = userResult.rows[0];

      // Query the database for the team members of the current user
      const teamResult = await pool.query(
        "SELECT * FROM users WHERE team_name = $1 AND id != $2",
        [currentUser.team_name, currentUser.id]
      );

      const teamMembers = teamResult.rows;

      res.status(200).json({ currentUser, teamMembers });
    } catch (error) {
      console.error("Error querying the database:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}