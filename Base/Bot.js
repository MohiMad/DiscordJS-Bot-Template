const Discord = require("discord.js");
const fs = require("fs");

/**
 * Discord Bot class. Extends Discord.Client, adding setup properties/methods. 
 * 
 */
class Bot extends Discord.Client {
    /**
     * 
     * @param {String} TOKEN The secret token of the Discord Client
     * @param {String} PREFIX The Client's prefix. '!' by default.
     * @param {String} DEV_ID [Optional] The Developer's ID 
     * @param {Boolean} ALLOW_DMS [Optional] Whether the Client should respond to DMs
     */
    constructor(TOKEN, PREFIX = "!", DEV_ID = null, ALLOW_DMS = false) {
        super();
        this.TOKEN = TOKEN;
        this.PREFIX = PREFIX;
        this.DEV_ID = DEV_ID;
        this.ALLOW_DMS = ALLOW_DMS;
        this.commands = new Discord.Collection();

        //The method main is ran upon creation of the Bot instance
        this.main();
    }

    /**
     * [main function]
     * Sums up multiple functions together. 
     */
    main() {
        this.assignEvents();
        this.assignCommands();
        this.login(this.TOKEN);
    }

    assignEvents() {
        //Loop over all event files in the folder 'events' and assign them to the client.
        for (const event of fs.readdirSync("./events").filter(file => file.endsWith(".js"))) {
            this.on(event.replace(".js", ""), require(`../events/${event}`).bind(null, this));
        }
    }

    assignCommands() {
        //Iterates over every subfolder of the 'commands' folder and assigns each command at a time.
        for (const category of fs.readdirSync("./commands").filter(name => !/\./.test(name))) {
            for (const file of fs.readdirSync(`./commands/${category}`).filter(File => File.endsWith('.js'))) {
                const command = new (require(`../commands/${category}/${file}`))(this);

                this.commands.set(command.name, command);
            }
        }
    }

}

module.exports = Bot;