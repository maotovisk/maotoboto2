// DEPENDENCIES
const   Discord =   require('discord.js'),
        Util    =   require("./resources/utils");

// GLOBAL VARIABLES
const mboto = new Discord.Client();
const keys = require('./private/keys.json');
const guilds = require('./private/guilds.json');

// BOT READY
mboto.on('ready', () => {
    Util.printLog("Logged in as " + mboto.user.tag)
  });

// GUILD CONFIG GENERATOR
mboto.on('guildCreate', ()=> {
    //TODO
})

//COMMANDS

// LOGIN 
mboto.login(keys.DISCORD_TOKEN);
