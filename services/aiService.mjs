import OpenAI from "openai";
import fs from "fs";

const key = "";

const openai = new OpenAI({
  apiKey: key,
});
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to read the local JSON file
async function readJSONFile(filepath) {
  const data = fs.readFileSync(filepath, "utf8");
  return JSON.parse(data);
}

// Function to write the updated JSON file
async function writeJSONFile(filepath, data) {
  const jsonContent = JSON.stringify(data, null, 2);
  fs.writeFileSync(filepath, jsonContent, "utf8");
}

async function getTagsForArticle(articleText) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a natural language processing assistant. Analyze news article content shared and provide me with cryptocurrency tickers.",
      },
      {
        role: "system",
        content:
          "I am expecting as a response only a cryptocurrency Ticker. If there are no tickers then just return an empty string",
      },
      {
        role: "user",
        content: articleText,
      },
    ],
    model: "gpt-3.5-turbo",
    seed: 1,
    temperature: 0.2,
  });

  // Assume that the AI returns a comma-separated list of keywords
  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content
    .split(",")
    .map((tag) => tag.trim());
}

// Main function to process articles
async function processArticles(filepath) {
  // Read articles from JSON file
  let articlesData = await readJSONFile(filepath);

  // Limit to the first 5 articles
  let firstFiveArticles = articlesData.slice(10, 12);

  // Iterate over each article and get tags
  for (let article of firstFiveArticles) {
    let tags = await getTagsForArticle(article.contentSnippet);
    // Add tags to the article data
    article.tags = tags;

    await delay(20000);
  }

  // Write the updated articles data back to the JSON file
  // Note: This will only write the first five articles back to the file
  await writeJSONFile(filepath, firstFiveArticles);
}

// Replace 'your_file_path.json' with the path to your local JSON file
processArticles("normalizedOutput.json");

// async function main() {
//   // Initialize an array to hold the conversation history
//   let messages = [
//     {
//       role: "system",
//       content:
//         "You are a helpful natural language processing tool. I will be sharing news articles and I'd like you to analyze it and provide me with the tickers of mentioned cryptocurrencies.Only tickers in your response",
//     },
//     {
//       role: "user",
//       content:
//         "Here is the first article text: BLUR Up 30% Following Season 2 Airdrop, Binance Listing, The token of NFT marketplace Blur has surged following news of its listing on Binance and the completion of its Season 2 airdrop.",
//     },
//   ];

//   // Function to send messages to the API and receive the response
//   async function askAI(messages) {
//     const completion = await openai.chat.completions.create({
//       messages: messages,
//       model: "gpt-3.5-turbo",
//       seed: 1,
//       temperature: 0.2,
//     });
//     return completion; // Retrieve the AI's response
//   }
//   // Ask the initial question
//   let response = await askAI(messages);
//   console.log("AI:", response);

//   // Now you can continue to chain questions
//   // messages.push({
//   //   role: "user",
//   //   content: "Can you summarize the key points from the article?", // New question
//   // });

//   // response = await askAI(messages);
//   // console.log("AI:", response);

//   // Keep adding new user messages and getting responses in the same pattern
// }

// main();
