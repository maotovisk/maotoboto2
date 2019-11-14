const   fs      =   require('fs'),
        Util    =   require("./utils");

var configPath =   './private/config.json',
    config;


function loadConfig() {
        try {
            if (fs.existsSync(configPath)) {
                const jsonString = fs.readFileSync(configPath);
                config = JSON.parse(jsonString);
            } else {
                createDefaultConfig();
            }
          } catch(err) {
           Util.printErr(err);
          }
}

function createDefaultConfig() {
    config = {
        "prefix": "m!",
        "defaultLanguage": "pt_br"
    };
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

//
function setConfig(recievedConfig) {
    loadConfig();
    config = {
        "prefix": recievedConfig.prefix,
        "defaultLanguage": recievedConfig.defaultLanguage
    };
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}


function getConfig() {
    loadConfig();
    return config;
}
module.exports = {getConfig, setConfig, createDefaultConfig}

