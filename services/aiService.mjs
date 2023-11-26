import OpenAI from "openai";

const key = process.env.local.OPEN_AI_KEY;

const openai = new OpenAI({
  apiKey: key,
});

async function main() {
  // Initialize an array to hold the conversation history
  let messages = [
    {
      role: "system",
      content:
        "You are a helpful natural language processing tool. I will be sharing news articles and I'd like you to analyze it and provide me with the tickers of mentioned cryptocurrencies.Only tickers in your response",
    },
    {
      role: "user",
      content:
        "Here is the first article text: BLUR Up 30% Following Season 2 Airdrop, Binance Listing, The token of NFT marketplace Blur has surged following news of its listing on Binance and the completion of its Season 2 airdrop.",
    },
  ];

  // Function to send messages to the API and receive the response
  async function askAI(messages) {
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
      seed: 1,
      temperature: 0.2,
    });
    return completion; // Retrieve the AI's response
  }
  // Ask the initial question
  let response = await askAI(messages);
  console.log("AI:", response);

  // Now you can continue to chain questions
  // messages.push({
  //   role: "user",
  //   content: "Can you summarize the key points from the article?", // New question
  // });

  // response = await askAI(messages);
  // console.log("AI:", response);

  // Keep adding new user messages and getting responses in the same pattern
}

main();
