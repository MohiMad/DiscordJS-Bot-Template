const Discord = require("discord.js");
const Command = require("../../Base/Command.js");
const got = require('got');
const moment = require("moment");

module.exports = class Meme extends Command {
    constructor(bot) {
        super(bot, {
            name: "meme",
            aliases: ["makemelaugh"],
            category: "Fun",
            description: "Sends a meme from r/dankmemes",
            permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
            usage: "!meme"
        });
    }

    async execute({ message }) {
        try {
            got("https://www.reddit.com/r/dankmemes/.json?limit=100").then(async (response) => {
                const content = JSON.parse(response.body),
                    allowed = content.data.children.filter(post => !post.data.over_18 && post.data.is_video === false && post.data.spoiler === false && post.data.author != "AutoModerator"),
                    randomPostNumber = Math.floor(Math.random() * allowed.length);


                let Image = allowed[randomPostNumber].data.url;
                if (Image.includes("gallery")) Image = `https://i.redd.it/${allowed[randomPostNumber].data["gallery_data"]["items"][0].media_id}.jpg`;

                let upvotes = allowed[randomPostNumber].data.ups;

                let num_comments = allowed[randomPostNumber].data.num_comments;

                const embed = new Discord.MessageEmbed()
                    .setTitle((allowed[randomPostNumber].data.title.length > 256) ? "Title too long" : allowed[randomPostNumber].data.title)
                    .setURL(`https://reddit.com${allowed[randomPostNumber].data.permalink}`)
                    .setAuthor(allowed[randomPostNumber].data.author)
                    .setDescription((allowed[randomPostNumber].data.selftext.length > 2048) ? `The post was too long! click [HERE](${URL}) to see it` : allowed[randomPostNumber].data.selftext)
                    .setImage(`${Image}`)
                    .setColor("RANDOM")
                    .setFooter(`${moment(allowed[randomPostNumber].data.created * 1000).calendar().replace("Tomorrow", "Today")} ─ 👍 ${upvotes} | 💬 ${num_comments}`);

                message.channel.send(embed);
            })
        } catch (e) {
            console.error(e);
        }
    }
}