const { replaceAll } = require("./utils/StringUtils.js");
const fs = require('fs')

function generarIndexJsFile(sceneName, rootPath){
    var contenido =
        `import ##upperName from './##upperName'

export default ##upperName
           `;
    contenido = replaceAll(contenido, "##upperName", sceneName)
    fs.writeFileSync(`${rootPath}/${sceneName}/index.js`, contenido)
}

exports.generarIndexJsFile = generarIndexJsFile