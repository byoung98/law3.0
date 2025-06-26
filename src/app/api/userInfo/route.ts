import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

// Create a connection pool to Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ message: "Missing userId parameter" }, { status: 400 });
  }

  try {
    const userResult = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);

    if (userResult.rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const currentUser = userResult.rows[0];

    const teamResult = await pool.query(
      "SELECT * FROM users WHERE team_name = $1 AND id != $2",
      [currentUser.team_name, currentUser.id]
    );

    const teamMembers = teamResult.rows;

    return NextResponse.json({ currentUser, teamMembers });
  } catch (error) {
    console.error("Error querying the database:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
