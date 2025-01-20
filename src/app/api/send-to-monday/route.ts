export async function POST(req: Request) {
  const { text, text2, long_text } = await req.json();

  const mondayApiUrl = "https://api.monday.com/v2";
  const apiKey = process.env.MONDAY_API_KEY;

  const query = `
    mutation {
      create_item (board_id: 1958553530, item_name: "${text}", column_values: "{\"text\": \"${text2}\", \"long_text\": \"${long_text}\"}") {
        id
      }
    }
  `;

  try {
    const response = await fetch(mondayApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (response.ok) {
      return new Response(JSON.stringify({ success: true, data }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ success: false, error: data }), {
        status: 400,
      });
    }
  } catch (error) {
    console.error("Error:", error);

    // Narrowing down the error type using a type guard
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 }
      );
    } else {
      // If it's not an instance of Error, handle it as a generic unknown
      return new Response(
        JSON.stringify({ success: false, error: "An unknown error occurred" }),
        { status: 500 }
      );
    }
  }
}
