const { replaceAll } = require("./utils/StringUtils.js");
const fs = require('fs')

function generarIndexJsFile(componentName, rootPath) {
    var contenido =
        `import ##upperName from './##upperName'

export default ##upperName
           `;
    contenido = replaceAll(contenido, "##upperName", componentName)
    fs.writeFileSync(`${rootPath}/${componentName}/index.js`, contenido)
}

function generarIndexJsFile(componentName, sceneName, rootPath) {
    var contenido =
        `import ##upperName from './##upperName'

export default ##upperName
           `;
    contenido = replaceAll(contenido, "##upperName", componentName)
    fs.writeFileSync(`${rootPath}/${sceneName}/${componentName}/index.js`, contenido)
}

exports.generarIndexJsFile = generarIndexJsFile