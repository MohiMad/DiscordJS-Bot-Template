const Discord = require("discord.js");
const Command = require("../../Base/Command.js");

module.exports = class Kick extends Command {
    constructor(bot) {
        super(bot, {
            name: "kick",
            category: "Moderation",
            description: "Use this command to kick a member!",
            usage: "!kick <Member> [reason]"
        });
    }

    async execute({ message, args, bot }) {
        //Command
    }
}