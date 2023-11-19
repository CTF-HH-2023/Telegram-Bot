require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    if (text == '/start') {
        bot.sendMessage(chatId, "Мы не принимаем просто так, поэтому, пожалуйста, пройдите через наш сайт проверки, чтобы убедиться, что вы действительно один из нас: \nhttp://X.X.X.X:"+process.env.WEBPORT+"/");
    }

    if (text == '/join dPsWu72M23nyL2'){
        bot.sendMessage(chatId, process.env.TELEGRAM_URL);
    }
})