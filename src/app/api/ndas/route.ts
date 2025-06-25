import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM ndaDetails');

    if (result.rows.length > 0) {
      return NextResponse.json(result.rows, { status: 200 });
    } else {
      return NextResponse.json({ message: 'No NDAs Found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error querying the database:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
