// DEPENDENCIES
const   Discord       =   require('discord.js'),
        Util          =   require("./resources/util/utils"),
        Config        =   require('./resources/util/config')
        GuildUtil     =   require("./resources/util/guild"),
        LanguagueUtil =   require("./resources/util/language");

// GLOBAL VARIABLES
const mboto = new Discord.Client();
const keys = require('./private/keys.json');

// BOT READY
mboto.on('ready', () => {
    Util.printLog("Logged in as " + mboto.user.tag);
    mboto.user.setActivity({
      type: "STREAMING",
      url: "http://twitch.tv/maotovisk"
  }); 
    Config.getConfig();   
});

// GUILD CONFIG GENERATOR
mboto.on('guildCreate', (guild)=> {
    GuildUtil.createConfig(guild.id);
    Util.printLog("Joined guild ("+ guild.id +")");
});

//COMMANDS

mboto.on('message', (message) => {
  if (message.author.bot == true) return;
  Util.printLog(message.guild.name + ">" + message.channel.name + ": " + message.content)
  let guildId = message.guild.id;
  let prefix = GuildUtil.getConfig(guildId).prefix;
  let language = GuildUtil.getConfig(guildId).defaultLanguage;
  let localizatedMessages = LanguagueUtil.getLang(language);
  let args = message.content.substring(0, prefix.lenght).split(' ');
  let command = args[0];
  switch (command) {
    case localizatedMessages["command_info"].command_name:
      return message.channel.send(localizatedMessages["command_info"].content.footer)
    default:
      return message.channel.send("Comando inválido");
  }
});

// LOGIN 
mboto.login(keys.DISCORD_TOKEN);
