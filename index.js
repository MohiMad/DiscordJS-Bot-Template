//text in green is just text, anything behind two slashes (//) is text
//const is a variable
const { Client, RichEmbed } = require('discord.js'); //requiring the discord.js module

const bot = new Client(); 

const token = 'NjQxMjE0MzY3NzlyODk3NDA4.XfoUOw.QMw7LVGQT1200AH43jsgliPWD84';//put the bot's token(SECRET) here



//when the bot is on it well tell you in the heroku logs/terminal
    bot.on('ready', () => {
        console.log(`Bot is up and running`);//console.log = sends the message to the logs/terminal only 


        bot.user.setActivity(' vanis.io')//sets what the bot is playing so here it will show (Playing vanis.io)

    })
        //message event commands goes HERE
        bot.on('message', async message => {
            
        let prefix = ">"; //sets the prefix to the bot here it is (>) you can change it if you want

        let args = message.content.substring(prefix.length).split(" "); //(let) creates a variabel here we create a variabel named "args"

        if (!message.content.startsWith(prefix)) return; //if the message doesn't start with the bot's prefix the bot will return (not do anything)
    
        switch (args[0]) {//args[0] is the command example ">help" help here is args[0]


            //All of your commands goes here

            case "tag": //if someone types >tag the bot will do the following....
                //code goes in the middle of case and break

                message.channel.send("Here is the King clan's tag `🅺♛` ");//if someone does >tag the bot will message the channel that send >tag with the clans tag


                break;//always do break after creating a new case

            case ""://the value in the middle of "" can be anything

            message.channel.send("Hello " + message.author.username); //message.channel.send(""); the value between "" can be anything
                                            //(message.author.username) gets the author's username and sends it
            break;//always break

        
            
        }
    });//end of "message" event
    
    
    
    

 



 
    bot.login(token);//logs the bot in with the token used DONT CHANGE

