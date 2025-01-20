// src/app/api/send-to-monday/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { query } = await req.json(); // Parsing JSON from the body

  // Check if the query is missing
  if (!query) {
    return NextResponse.json(
      { success: false, error: "Query parameter is missing." },
      { status: 400 }
    );
  }

  const mondayApiUrl = "https://api.monday.com/v2";
  const apiKey = process.env.MONDAY_API_KEY; // Ensure the API key is set in environment variables

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "Monday.com API Key is not set." },
      { status: 500 }
    );
  }

  try {
    // Send the GraphQL query to Monday.com
    const response = await fetch(mondayApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ query }),
    });

    // Handle the response from Monday.com
    const result = await response.json();

    // Check if the result has the expected data
    if (result.data) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: "Failed to create item in Monday.com." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error during API call to Monday.com:", error);
    return NextResponse.json(
      {
        success: false,
        error: "There was an error during the form submission.",
      },
      { status: 500 }
    );
  }
}
