export async function POST(req: Request) {
  try {
    // Parse the form data sent via the POST request
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      // Return an error if required fields are missing
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const mondayApiUrl = "https://api.monday.com/v2";
    const apiKey = process.env.MONDAY_API_KEY;

    // GraphQL mutation query
    const query = `
      mutation {
        create_item(
          board_id: 1958553530,
          item_name: "${name}",
          column_values: "{
            \\"text\\": \\"${name}\\",
            \\"text2\\": \\"${email}\\",
            \\"long_text\\": \\"${message}\\"
          }"
        ) {
          id
        }
      }
    `;

    // Send the request to the Monday.com API
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
      return new Response(
        JSON.stringify({ success: false, error: data.errors }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      { status: 500 }
    );
  }
}
