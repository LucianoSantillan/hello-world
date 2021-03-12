const { generarScssClassFile } = require('./ScssFileGenerator.js')
const Console = require('./utils/Console.js')
const fs = require('fs')
const { generarIndexJsFile } = require('./indexJsFileGenerator.js')
const { generarSubSceneClassFile } = require('./SubsceneFileGenerator.js')
const { rootPath } = require('./constants.js')

function createSubScene(args) {
    const {sceneName, subScene} = new CreateSubSceneRequest(args)
    if (!fs.existsSync(`${rootPath}/${sceneName}`)) {
        Console.write("Error: Este nombre de escena no existe");
        return;
    }
    if (fs.existsSync(`${rootPath}/${sceneName}/${subScene}`)) {
        Console.write("Error: Este nombre del subcomponente ya existe");
        return;
    }
    fs.mkdirSync(`${rootPath}/${sceneName}/${subScene}`)
    generarScssClassFile(sceneName, subScene, rootPath)
    generarIndexJsFile(`${rootPath}/${sceneName}/${subScene}`, subScene)
    generarSubSceneClassFile(sceneName, subScene, rootPath)
}

exports.createSubScene = createSubScene

class CreateSubSceneRequest {
    constructor(args) {
        if (!args[1]) {
            throw new Error("valor inválido: scene name")
        }
        if (!args[2]) {
            throw new Error("valor inválido: subscene name")
        }
        this.sceneName = capitalizeFirstLetter(args[1]?.toString().trim())
        this.subScene = capitalizeFirstLetter(args[2]?.toString().trim())
    }
}
