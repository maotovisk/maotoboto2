const   fs  =   require('fs');

var langs = {
    "pt_br": "./lang/pt_br.json",
    "en_us": "./lang/en_us.json"
}

function getLang(lang) {
    if (fs.existsSync(langs[lang])) {
        const jsonString = fs.readFileSync(langs[lang]);
        return JSON.parse(jsonString);
    } 
}

function getLocalization(language, item_name) {
    return getLang(language)[item_name];
}

module.exports = {getLocalization, getLang}