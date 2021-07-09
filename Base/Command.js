class Command {
    constructor(bot, cmdData){
        this.bot = bot;
        this.name = cmdData.name;
        this.aliases = cmdData.aliases || [];
        this.category = cmdData.category || "general";
        this.permissions = cmdData.permissions;
        this.usage = cmdData.usage || this.name;
        this.cooldown = cmdData.cooldown;
    }
}

module.exports = Command;