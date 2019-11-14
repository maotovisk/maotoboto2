const   fs      =   require('fs'),
        Util    =   require("./utils"),
        Config  =   require('./config');

var guildConfigPath =   './private/guilds.json',
    guildConfig;


function loadConfig() {
        try {
            if (fs.existsSync(guildConfigPath)) {
                const jsonString = fs.readFileSync(guildConfigPath)
                guildConfig = JSON.parse(jsonString)
            } else {
                guildConfig = '';
                fs.writeFileSync(guildConfigPath, JSON.stringify(guildConfig, null, 2));
            }
          } catch(err) {
            Util.printErr(err);
          }
}

function createConfig(guildId) {
    loadConfig();
    try {
        guildConfig[guildId] = {
            "prefix": Config.getConfig().prefix,
            "defaultLanguage": Config.getConfig().defaultLanguage
        };
        fs.writeFileSync(guildConfigPath, JSON.stringify(guildConfig, null, 2));
        Util.printLog('Created guild config file: ' + guildId);
    } catch(err) {
        Util.printErr(err);
    }
}

function setLanguage(guildId, language) {
    loadConfig();
    guildConfig[guildId].defaultLanguage = language;
    try {
        fs.writeFileSync(guildConfigPath, JSON.stringify(guildConfig, null, 2));
        Util.printLog('Updated guild default language: ' + guildId);
    } catch(err) {
        Util.printErr(err);
    }
}

function setPrefix(guildId, prefix) {
    loadConfig();
    guildConfig[guildId].prefix = prefix;
    try {
        fs.writeFileSync(guildConfigPath, JSON.stringify(guildConfig, null, 2));
        Util.printLog('Updated guild prefix: ' + guildId);
    } catch(err) {
        Util.printErr(err);
    }
}

function getConfig(guildId) {
    loadConfig();
    try {
        if (guildConfig[guildId] != undefined)
            {return guildConfig[guildId];}
            else {createConfig(guildId)}
    } catch(err) {
        Util.printErr(err);
        return null;
    }
}

module.exports = {createConfig, setLanguage, setPrefix, getConfig}