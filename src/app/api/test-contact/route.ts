// Test API endpoint
// This file can be deleted after testing
// Navigate to: http://localhost:3000/api/test-contact

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Contact API endpoint is working!",
    timestamp: new Date().toISOString(),
    note: "This is a test endpoint. The actual contact form uses POST method.",
  });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    return NextResponse.json({
      message: "Test successful - API can receive POST data",
      received: data,
      timestamp: new Date().toISOString(),
      note: "This is a test response. Check your email for actual form submissions.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to parse request data", details: error },
      { status: 400 }
    );
  }
}
