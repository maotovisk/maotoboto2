const   fs      =   require('fs'),
        Util    =   require("./utils"),
        Config  =   require('./config');

var guildConfigPath =   '../private/guilds.json',
    guildConfig;


function loadConfig() {
        try {
            if (fs.existsSync(guildConfigPath)) {
                const jsonString = fs.readFileSync(guildConfigPath)
                guildConfig = JSON.parse(jsonString)
            } else {
                guildConfig = '{}';
                fs.writeFileSync(guildConfigPath, guildConfig);
            }
          } catch(err) {
            Util.printErr(err);
          }
}

function createConfig(guildId) {
    loadConfig();
    guildConfig[guildId] = {
        "prefix": Config.getConfig().defaultPrefix,
        "joinedAt": guild.joinedAt,
        "defaultLanguage": Config.getConfig().defaultLanguage
    }
    try {
        fs.writeFileSync(guildConfigPath, guildConfig);
        Util.printLog('Created guild config file: ' + guildId);
    } catch(err) {
        Util.printErr(err);
    }
}

function setLanguage(guildId, language) {
    loadConfig();
    guildConfig[guildId].defaultLanguage = language;
    try {
        fs.writeFileSync(guildConfigPath, guildConfig);
        Util.printLog('Updated guild default language: ' + guildId);
    } catch(err) {
        Util.printErr(err);
    }
}

function setPrefix(guildId, prefix) {
    loadConfig();
    guildConfig[guildId].prefix = prefix;
    try {
        fs.writeFileSync(guildConfigPath, guildConfig);
        Util.printLog('Updated guild prefix: ' + guildId);
    } catch(err) {
        Util.printErr(err);
    }
}

function getConfig(guildId) {
    loadConfig();
    try {
        return guildConfig[guildId];
    } catch(err) {
        Util.printErr(err);
        return null;
    }
}

module.exports = {createConfig, setLanguage, setPrefix, getConfig}