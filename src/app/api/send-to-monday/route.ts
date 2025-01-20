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
      // If `data` contains important information, you can log it or return it.
      console.log("Success data:", data);
      return new Response(JSON.stringify({ success: true, data }), {
        status: 200,
      });
    } else {
      console.error("Error data:", data);
      return new Response(JSON.stringify({ success: false, error: data }), {
        status: 400,
      });
    }
  } catch (err) {
    // Handling error
    if (err instanceof Error) {
      console.error("Error:", err.message); // Log the error message
      return new Response(
        JSON.stringify({ success: false, error: err.message }),
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", err);
      return new Response(
        JSON.stringify({ success: false, error: "An unknown error occurred" }),
        { status: 500 }
      );
    }
  }
}
