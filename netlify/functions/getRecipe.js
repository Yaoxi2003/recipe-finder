import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are an assistant that suggests recipes based on a user's ingredients. 
Strict Formatting Rules:
1. Do NOT include any introductory text. 
2. Start immediately with '#### Here is your recipe:' and '## [Recipe Name]'.
3. Use '### Ingredients:' and '### Instructions:' as section headers.
4. Use Markdown lists.
`;

export const handler = async (event) => {
  console.log("API Key detected:", !!process.env.ANTHROPIC_API_KEY);
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { ingredients } = JSON.parse(event.body);
    const ingredientsString = ingredients.join(", ");

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY, 
    });

    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        { role: "user", content: `I have ${ingredientsString}. Suggest a recipe!` },
      ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ recipe: msg.content[0].text }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }

};
