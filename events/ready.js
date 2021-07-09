module.exports = (bot) => {
    bot.user.setActivity("with code", { type: "PLAYING" });
    console.log(`Logged in as ${bot.user.tag}`);
}