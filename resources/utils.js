//CONST DISCORD
const   moment  =   require("moment"),
const   fs      =   require('fs');

// ENHANCED PRINTER 
function printLog(message) {
    console.log( moment().format('DD/MM/YYYY hh:mm:ss') + " [INFO] " + message)
}

// WRITECONFIG
function writeConfig(variableToWrite, fileToWrite) {
    //TODO
}
module.exports = {printLog}