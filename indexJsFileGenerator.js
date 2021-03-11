const { replaceAll } = require("./utils/StringUtils.js");
const fs = require('fs')

function generarIndexJsFile(componentName, sceneName, rootPath) {
    var contenido =
        `import ##upperName from './##upperName'

export default ##upperName
           `;
    if (componentName) {
        contenido = replaceAll(contenido, "##upperName", componentName)
        fs.writeFileSync(`${rootPath}/${sceneName}/${componentName}/index.js`, contenido)
    }
    else {
        contenido = replaceAll(contenido, "##upperName", sceneName)
        fs.writeFileSync(`${rootPath}/${sceneName}/index.js`, contenido)
    }
}

exports.generarIndexJsFile = generarIndexJsFile