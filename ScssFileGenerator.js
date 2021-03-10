const { lowerFirstLetter } = require("./utils/StringUtils.js");
const fs = require('fs')

function generarScssClassFile(sceneName, subComponent, rootPath) {
    if (subComponent) {
        fs.writeFileSync(`${rootPath}/${sceneName}/${subComponent}/${lowerFirstLetter(subComponent)}.module.scss`, "")
    }
    else {
        fs.writeFileSync(`${rootPath}/${sceneName}/${lowerFirstLetter(sceneName)}.module.scss`, "")
    }
}

exports.generarScssClassFile = generarScssClassFile