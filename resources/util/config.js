const   fs      =   require('fs'),
        Util    =   require("./utils");

var configPath =   '../private/config.json',
    config;


function loadConfig() {
        try {
            if (fs.existsSync(configPath)) {
                const jsonString = fs.readFileSync(configPath)
                config = JSON.parse(jsonString)
            } else {
                config = '{}';
                fs.writeFileSync(configPath, config);
            }
          } catch(err) {
           Util.printErr(err);
          }
}

function createDefaultConfig(recievedConfig) {
    loadConfig();
    config = {
        "prefix": recievedConfig.prefix,
        "defaultLanguage": recievedConfig.defaultLanguage;
    };
    fs.writeFileSync(configPath, config);
}
function getConfig(guildId) {
    loadConfig();
    return config;
}
module.exports = {getConfig, createDefaultConfig}

