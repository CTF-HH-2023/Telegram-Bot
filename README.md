# Telegram challenge
This app is part of the challenge for the HHCTF

# Solving the challenge
In the cookies present on the site, the user should find that there is a cookie called "country", which is randomly set to belgium or sweden. By default, the site displays "You're not one of us...".

Users must understand that to become one of them, all they have to do is change their cookie to "russia" to become Russian in the eyes of the verification site.

Once the cookie has been changed, the user's page will change, and the message will read "Hello friend, please add the superpassword to your configuration. Do not bruteforce, just use your brain. Doing a bruteforce will ban you from our site and group". When scanning this page, the user will find a password as a comment. If the user tries this password directly, it will be rejected with a message stating: "Haha, did you really think the password would be in plain text in the code of our super-secret app?".

At this point, the user must understand that the password given is in fact encoded, and by passing it into a tool like CyberChef, the password will be decoded from Base64. All they have to do is add the "password" or "superpassword" cookie with the value, and the site will give them the password to give to the bot.

# Run the challenge
## With Docker (recommended) 
```
git clone https://github.com/CTF-HH-2023/Telegram-Bot.git
cd ./Telegram-Bot
docker build -t telegrambot .

docker run -d --name TelegramBot -e TELEGRAM_TOKEN=XXXXX -e WEBPORT=YYYY -e TELEGRAM_URL=https://t.me/XXXX -p YYYY:YYYY telegrambot
```
## Without Docker
```
git clone https://github.com/CTF-HH-2023/Telegram-Bot.git
cd ./Telegram-Bot
# fill the .env file with the data you want into

npm i && node app.js
```
## Environement variables
| ENV            | Description                                                          | Required ? |
|----------------|----------------------------------------------------------------------|------------|
| TELEGRAM_TOKEN | The Telegram bot token                                               |      ✅     |
| WEBPORT        | The port on which the application should listen on its local network |      ✅     |
| TELEGRAM_URL   | The URL to be returned by the bot after the player has succeeded.    |      ✅     |
| URL            | WEB application URL, e.g. http://131.78.34.12                        |      ✅     |
## Responsible Team :
- [Jean Staffe](https://github.com/IceroDev)
