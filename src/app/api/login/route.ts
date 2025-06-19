import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg"; // PostgreSQL client for Node.js

// Create a connection pool to Neon
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, 
    ssl: {
      rejectUnauthorized: false, 
    },
  });

export async function POST(req: Request) {
    const body = await req.json();
    const { email } = body;
    console.log("Email received:", email);
    // Handle login logic

    if (req.method === "POST") {
    
        try {
          // Query the Neon database to check if the email exists
          const result = await pool.query("SELECT * FROM users ");//need to fix this
            console.log("Query result:", result);
          if (result.rows.length > 0) {
            // Email exists in the database
            return new Response(JSON.stringify({ message: 'Logged in!' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
              });
          } else {
            // Email not found
            return new Response(JSON.stringify({ message: 'Email not found in the database.' }), {
              status: 404,
              headers: { 'Content-Type': 'application/json' },
            });          
        }

        } catch (error) {
            console.error("Error querying the database:", error);
            return new Response(JSON.stringify({ message: 'Internal server error' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });

        }
      } else {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
          status: 405,
          headers: { 'Content-Type': 'application/json' },
        });
        }
}