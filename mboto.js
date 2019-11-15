// DEPENDENCIES
const   Discord         =   require('discord.js'),
        Util            =   require("./resources/util/utils"),
        Config          =   require('./resources/util/config')
        GuildUtil       =   require("./resources/util/guild"),
        LanguagueUtil   =   require("./resources/util/language"),
        CommandsCommand =   require("./resources/command/commands");

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

  let guildId = message.guild.id;
  let prefix = GuildUtil.getConfig(guildId).prefix;
  let language = GuildUtil.getConfig(guildId).defaultLanguage;
  let localizatedMessages = LanguagueUtil.getLang(language);
  let unprefixedMessage = message.content.substr(prefix.length, message.content.length);
  let args = unprefixedMessage.split(' ');
  let command = args[0];

  
  if (message.author.bot == true) return;
  if (!message.content.startsWith(prefix)) return;
  Util.printLog(message.guild.name + ">" + message.channel.name + ": " + message.content)

  switch (command) {
    case localizatedMessages.commands["command_info"].command_name:
      return CommandsCommand.commandHandler(message, args);
    default:
      return message.channel.send(localizatedMessages['invalid_command']);
  }
});

// LOGIN 
mboto.login(keys.DISCORD_TOKEN);
