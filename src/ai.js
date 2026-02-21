import Anthropic from "@anthropic-ai/sdk"

const SYSTEM_PROMPT = `
You are an assistant that suggests recipes based on a user's ingredients. 

Strict Formatting Rules:
1. Do NOT include any introductory text (e.g., "Based on the ingredients..."). 
2. Start your response immediately with 'Here is your recipe: ' as an H4 title and the name of recipe as an H2 title next line.
3. Use exactly "Ingredients:" and "Instructions:" as H3 titles for those sections.
4. Format the ingredients as a bulleted list and instructions as a numbered list.
5. Use Markdown only.
`

const anthropic = new Anthropic({
    // set an environment variable
    apiKey: process.env.ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})

export default async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}