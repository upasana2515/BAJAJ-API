const axios = require("axios");

exports.askAI = async (question) => {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: question }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          key: process.env.GEMINI_API_KEY
        }
      }
    );

    const text =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("Empty AI response");
    }
    const cleaned = text
      .replace(/\*\*/g, "")   
      .replace(/[^\w\s]/g, "") 
      .trim();

    const words = cleaned.split(/\s+/);
    const answer = words[words.length - 1];
    return answer.charAt(0).toUpperCase() + answer.slice(1);

  } catch (err) {
    console.error(
      "AI ERROR:",
      err.response?.data || err.message
    );
    throw err;
  }
};
