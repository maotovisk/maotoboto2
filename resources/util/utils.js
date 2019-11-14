//CONST DISCORD
const   moment  =   require("moment"),
        fs      =   require('fs');

// ENHANCED PRINTER 
function printLog(message) {
    console.log( moment().format('DD/MM/YYYY hh:mm:ss') + " [INFO] " + message)
}

function printErr(message) {
    console.error( moment().format('DD/MM/YYYY hh:mm:ss') + " [ERROR] " + message)
}

// WRITECONFIG
function writeConfig(variableToWrite, fileToWrite) {
    //TODO
}
module.exports = {printLog, printErr}