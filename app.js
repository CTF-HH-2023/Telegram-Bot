var clc = require("cli-color");
const dotenv = require('dotenv');
dotenv.config();

console.log(clc.blue("[🛈] Loading Telegram Challenge ..."));

console.log(clc.blue("[🛈] Loading Telegram Bot ..."));

try {
    const telegramBot = require("./telegrambot.js").c;
    console.log(clc.green("[✓] Telegram Bot loaded"));
}catch(e){
    console.log(clc.red("[✘] Telegram Bot not loaded\n" + e));
}
console.log(clc.blue("[🛈] Loading Web App ..."));

try {
    const webServer = require("./webapp.js");
    console.log(clc.green("[✓] Web app loaded"));
    console.log(clc.green("[✓] Web Server listening on port "+process.env.WEBPORT));
}
catch(e){
    console.log(clc.red("[✘] Web Server not loaded\n" + e));
}