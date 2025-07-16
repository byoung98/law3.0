/**
 * Handles the GET request for the /api/health/live endpoint.
 *
 * This endpoint is used to check the liveness of the application.
 * It logs a debug message and returns a JSON response with a status of "live".
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} A promise that resolves to a JSON response with a status of "live".
 */
import { NextRequest, NextResponse } from "next/server";
export const revalidate = 0; // no cache

export async function GET(req: NextRequest) {
  // TODO - Add your health check logic here
  return NextResponse.json({ status: "live" });
}
