const Discord = require("discord.js");
//node .
/**
 * 
 * @param {Bot} bot An instance of the Bot class. See ../Bot.js
 * @param {Discord.Message} message A message object. See https://discord.js.org/#/docs/main/stable/class/Message
 * @returns 
 */
module.exports = (bot, message) => {
    //if the message isn't supposed to fire a bot command.
    if (!message.content.startsWith(bot.PREFIX)) return;
    if (message.author.id === bot.user.id) return;
    if (message.author.bot) return;

    //Custom check. Enables "maintenance mode"
    if(message.author.id != bot.DEV_ID) return;

    const args = message.content.slice(bot.PREFIX.length).split(/\s+/),
        cmd = args.shift();

    const params = {
        message, bot, args, cmd
    }

    const command = bot.commands.find(x => x.name.toLowerCase() === cmd.toLowerCase() || x.aliases.includes(cmd.toLowerCase()));
    if (command) command.execute(params);

}