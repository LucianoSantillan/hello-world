const { generarScssClassFile } = require('./ScssFileGenerator.js')
const Console = require('./utils/Console.js')
const fs = require('fs')
const { generarIndexJsFile } = require('./indexJsFileGenerator.js')
const { generarSubSceneClassFile } = require('./SubsceneFileGenerator.js')
const { rootPath } = require('./constants.js')

function createSubScene(sceneName, subComponent) {
    if (!fs.existsSync(`${rootPath}/${sceneName}`)) {
        Console.write("Error: Este nombre de escena no existe");
        return;
    }
    if (fs.existsSync(`${rootPath}/${sceneName}/${subComponent}`)) {
        Console.write("Error: Este nombre del subcomponente ya existe");
        return;
    }
    fs.mkdirSync(`${rootPath}/${sceneName}/${subComponent}`)
    generarScssClassFile(sceneName, subComponent, rootPath)
    generarIndexJsFile(subComponent, sceneName, rootPath)
    generarSubSceneClassFile(sceneName, subComponent, rootPath)
}

exports.createSubScene = createSubScene
