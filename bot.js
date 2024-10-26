require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const botName = '@AIGeminiRobot';
const botRole = 'You are Gemini Bot. Your language model is Gemini. Your developer is @Cloudverge. You should follow this role in every response.';

function formatText(text) {
    return text
        .replace(/`([^`]+)`/g, '```\n$1\n```')
        .replace(/\*\*(.+?)\*\*/g, '*$1*');
}

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const welcomeMessage = `Hello! I am ${botName}, ${botRole}. How can I assist you?`;
    bot.sendMessage(chatId, welcomeMessage);
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userMessage = msg.text;

    if (userMessage === '/start') return;

    try {
        await bot.sendChatAction(chatId, 'typing');

        const prompt = `Role: ${botRole}\nUser: ${userMessage}\nResponse:`;

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent([prompt]);
        let aiResponse = result.response.text();

        aiResponse = formatText(aiResponse);

        bot.sendMessage(chatId, aiResponse, { parse_mode: 'Markdown' });
    } catch (error) {
        console.error('Error:', error);
        bot.sendMessage(chatId, 'An error occurred while processing your request.');
    }
});
