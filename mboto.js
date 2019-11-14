// DEPENDENCIES
const   Discord       =   require('discord.js'),
        Util          =   require("./resources/util/utils"),
        GuildUtil     =   require("./resources/util/guild"),
        LanguagueUtil =   require("./resources/util/language"):

// GLOBAL VARIABLES
const mboto = new Discord.Client();
const keys = require('./private/keys.json');
const guilds = require('./private/guilds.json');

// BOT READY
mboto.on('ready', () => {
    Util.printLog("Logged in as " + mboto.user.tag)
});

// GUILD CONFIG GENERATOR
mboto.on('guildCreate', (guild)=> {
    GuildUtil.createConfig(guild.id);
    Util.printLog("Joined guild ("+ guild.id +")")
});

//COMMANDS

mboto.on('message', (message) => {
  let prefix = GuildUtil.getConfig(message.guild.id).prefix;
  let args = message.substring(0, prefix.lenght).split(' ');
  let command = args[0];
  switch (command) {
    case :
      
      break;
  
    default:
      break;
  }
});

// LOGIN 
mboto.login(keys.DISCORD_TOKEN);
