const Bot = require("./Base/Bot.js"),
config = require("./config.json");

new Bot(config.TOKEN, config.PREFIX, config.DEV_ID);