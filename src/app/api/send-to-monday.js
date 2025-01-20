// Import necessary libraries
import fetch from "node-fetch"; // If you're using fetch on the server side

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { text, text2, long_text } = req.body;

    const mondayApiUrl = "https://api.monday.com/v2"; // Replace with your Monday.com API URL
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
        return res.status(200).json({ success: true, data });
      } else {
        return res.status(400).json({ success: false, error: data });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }
}
