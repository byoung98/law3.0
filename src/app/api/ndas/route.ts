import { NextResponse } from 'next/server';
import { getLawHeaderData } from '@/lib/data';

export async function GET() {
  try {
    const data = await getLawHeaderData();
      return NextResponse.json({data});
  }catch (err){
    console.error("API error:", err);
    return NextResponse.json({error: "Failed to fetch data"}, {status: 500});
  }
}