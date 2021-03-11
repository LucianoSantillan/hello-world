const { generarSceneClassFile } = require('./SceneClassFileGenerator.js')
const { generarScssClassFile } = require('./ScssFileGenerator.js')
const { generarStoreClassFile } = require('./StoreFileGenerator.js')
const Console = require('./utils/Console.js')
const fs = require('fs')
const { generarIndexJsFile } = require('./indexJsFileGenerator.js')
const { rootPath } = require('./constants.js')

function createScene(sceneName){
    if (fs.existsSync(`${rootPath}/${sceneName}`)) {
        Console.write("Error: Este nombre de escena ya existe");
        return;
    }
    fs.mkdirSync(`${rootPath}/${sceneName}`)
    generarSceneClassFile(sceneName, rootPath)
    generarScssClassFile(sceneName, null, rootPath)
    generarStoreClassFile(sceneName, rootPath)
    generarIndexJsFile(null, sceneName, rootPath)
}

exports.createScene = createScene