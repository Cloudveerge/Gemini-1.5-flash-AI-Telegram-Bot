# Gemini-1.5-flash-AI-Telegram-Bot
An intelligent, conversational Telegram bot built on Node.js, leveraging the **Gemini-1.5-flash** generative AI model.


---

## Features

- **Powered by Gemini-1.5 Flash**: State-of-the-art AI model for responsive and context-aware answers.
- **Markdown Support**: Sends formatted messages with bold, italic, and code block styling.
- **Typing Simulation**: Realistic typing effect for a natural conversation flow.
- **Custom Role Configuration**: Defined bot persona for consistent and engaging responses.
- **Error Handling**: Clear, user-friendly messages in case of issues.


---

## Getting Started

### Prerequisites
1. **Node.js** (>= 14.x)
2. **Telegram Bot Token**: [Get your bot token](https://core.telegram.org/bots#botfather)
3. **Google Generative AI API Key**: Sign up at [Google Cloud](https://cloud.google.com/) to obtain your API key.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Cloudveerge/Gemini-1.5-flash-AI-Telegram-Bot.git
cd Gemini-1.5-flash-AI-Telegram-Bot
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your API keys:

```env
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
GOOGLE_API_KEY=your-google-api-key
```

---

## Usage

Start the bot with:

```bash
node bot.js
```

### Commands

- **/start**: Initiates the bot with a welcome message.
- **General Chat**: Engage in conversation with Gemini Bot—just type a message, and the bot will respond!


---

## Example Code

```javascript
const botName = '@AIGeminiRobot';
const botRole = 'You are Gemini Bot. Your language model is Gemini. Your developer is @Cloudverge. You should follow this role in every response.';

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Hello! I am ${botName}, ${botRole}. How can I assist you?`);
});
```

### Format Text with Markdown

The `formatText` function ensures clear, formatted responses:

```javascript
function formatText(text) {
    return text
        .replace(/`([^`]+)`/g, '```\n$1\n```')   // Code block
        .replace(/\*\*(.+?)\*\*/g, '*$1*');      // Bold text
}
```

---

## Screenshots and GIFs

1. **Start Command**: Shows the initial welcome message.
2. **Real-time Conversation**: Experience the bot’s quick responses and the seamless flow of interaction.
3. **Typing Effect**: Witness Gemini’s realistic typing animation, adding depth to interactions.

### Example Interactions

> **User**: "What's the weather today?"  
> **Gemini Bot**: "I'm here to help you find out—currently connecting to the latest data."


---

## Troubleshooting

If you encounter any issues:
- Ensure API keys are correctly set up in your `.env` file.
- Check for proper installation of dependencies.
- Verify your internet connection.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Maintained by [@Cloudveerge](https://github.com/Cloudveerge)  
For inquiries, reach out via [Telegram](https://t.me/Cloudverge).
