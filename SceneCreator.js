const { generarSceneClassFile } = require('./SceneClassFileGenerator.js')
const { generarScssClassFile } = require('./ScssFileGenerator.js')
const { generarStoreClassFile } = require('./StoreFileGenerator.js')
const Console = require('./utils/Console.js')
const fs = require('fs')
const { generarIndexJsFile } = require('./indexJsFileGenerator.js')
const { rootPath } = require('./constants.js')

function createScene(args){
    const {sceneName} = new CreateSceneRequest(args)
    if (fs.existsSync(`${rootPath}/${sceneName}`)) {
        Console.write("Error: Este nombre de escena ya existe");
        return;
    }
    fs.mkdirSync(`${rootPath}/${sceneName}`)
    generarSceneClassFile(sceneName, rootPath)
    generarScssClassFile(sceneName, null, rootPath)
    generarStoreClassFile(sceneName, rootPath)
    generarIndexJsFile(`${rootPath}/${sceneName}`, sceneName)
}

exports.createScene = createScene

class CreateSceneRequest {
    constructor(args) {
        if (!args[1]) {
            throw new Error("valor inválido: scene name en plural")
        }
        this.sceneName = capitalizeFirstLetter(args[1]?.toString().trim())
    }
}