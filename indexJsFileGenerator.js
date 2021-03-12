const { replaceAll } = require("./utils/StringUtils.js");
const fs = require('fs')

function generarIndexJsFile(path, componentName) {
    var contenido =
        `import ##upperName from './##upperName'

export default ##upperName
           `;
    contenido = replaceAll(contenido, "##upperName", componentName)
    fs.writeFileSync(`${path}/index.js`, contenido)
}

exports.generarIndexJsFile = generarIndexJsFile