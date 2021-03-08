const { lowerFirstLetter } = require("./utils/StringUtils.js");
const fs = require('fs')

function generarScssClassFile(sceneName, rootPath) {
    fs.writeFileSync(`${rootPath}/${sceneName}/${lowerFirstLetter(sceneName)}.module.scss`, "")
}

exports.generarScssClassFile = generarScssClassFile