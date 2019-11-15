const   fs              =   require('fs'),
        Discord         =   require('discord.js')
        LanguagueUtil   =   require("../util/language"),
        GuildUtil       =   require("../util/guild");

function getCommands(prefix, lang) {
    let localization = LanguagueUtil.getLang(lang);
    let commands = localization.commands;
    let returedCommandString = "";
    for (var command in commands) {
        returedCommandString += (prefix + command["command_name"] + " - " + command["desc"] + "\n");
    }
    return returedCommandString;
}
function commandHandler(message, args) {
    
    let guildId = message.guild.id;
    let language = GuildUtil.getConfig(guildId).defaultLanguage;
    let prefix = GuildUtil.getConfig(guildId).prefix;
    let localizatedMessages = LanguagueUtil.getLang(language);
    let commandMessages = localizatedMessages.commands['command_info'];
    let embedMessage = new Discord.RichEmbed()
        .setAuthor("MaotoBoto")
        .setDescription(commandMessages.content.header)
        .addField(commandMessages.content.commands, getCommands(prefix, language))
        return  message.channel.send(embedMessage);
} 

module.exports = {commandHandler}