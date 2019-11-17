const   fs              =   require('fs'),
        Discord         =   require('discord.js')
        LanguageUtil   =   require("../util/language"),
        GuildUtil       =   require("../util/guild");

function listLanguages() {
    let languageStringList = "";
    let langs = LanguageUtil.getLangList();
    for (prop in langs) {
        languageStringList += prop + "\n";
    }
    return languageStringList;
}

function commandHandler(message, args) {
    
    let guildId = message.guild.id;
    let language = GuildUtil.getConfig(guildId).defaultLanguage;
    let prefix = GuildUtil.getConfig(guildId).prefix;
    let localizatedMessages = LanguagueUtil.getLang(language);
    let commandMessages = localizatedMessages.commands['command_set_language_guild'];
    let langs = LanguageUtil.getLangList();
    let embedMessageList = new Discord.RichEmbed()
        .setAuthor("MaotoBoto")
        .setDescription(commandMessages.content.language_list)
        .addField(commandMessages.content.languages, listLanguages())
    if (args[1] == undefined) {return message.channel.send(localizatedMessages.invalid_usage + commandMessages.usage)}
    if (args[1] == "list" ) {return message.channel.send(embedMessageList);} else {
        if (langs[args[1]] != undefined) {
            GuildUtil.setLanguage(message.guild.id, args[1]);
            let embedMessage = new Discord.RichEmbed()
            .setAuthor("MaotoBoto")
            .setDescription(commandMessages.content.header)
            .addField("Status", commandMessages.content.language_set_success)
            return message.channel.send(embedMessage);
        }
    }

} 

module.exports = {commandHandler}