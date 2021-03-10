#!/usr/bin/env node
// index.js

const { generarSceneClassFile } = require('./SceneClassFileGenerator.js')
const { generarScssClassFile } = require('./ScssFileGenerator.js')
const { generarStoreClassFile } = require('./StoreFileGenerator.js')
const Console = require('./utils/Console.js')
const { capitalizeFirstLetter } = require('./utils/StringUtils.js')
const fs = require('fs')
const { generarIndexJsFile } = require('./indexJsFileGenerator.js')
const { generarSubSceneClassFile } = require('./SubsceneFileGenerator.js')

const rootPath = 'src/scenes'

const args = process.argv.slice(2)

let sceneName = capitalizeFirstLetter(args[0].toString().trim());

if (!fs.existsSync(rootPath)) {
    Console.write(`Error: Para poder crear la scena, la ruta ${rootPath} debe existir`)
    return;
}

if (crearEscena()) {
    if (fs.existsSync(`${rootPath}/${sceneName}`)) {
        Console.write("Error: Este nombre de escena ya existe");
        return;
    }
    fs.mkdirSync(`${rootPath}/${sceneName}`)
    generarSceneClassFile(sceneName, rootPath)
    generarScssClassFile(sceneName, null, rootPath)
    generarStoreClassFile(sceneName, rootPath)
    // generarIndexJsFile(sceneName, rootPath)
}

if (crearSubcomponenteDeEscena()) {
    if (!fs.existsSync(`${rootPath}/${sceneName}`)) {
        Console.write("Error: Este nombre de escena no existe");
        return;
    }
    let subComponent = capitalizeFirstLetter(args[1].toString().trim());
    if (fs.existsSync(`${rootPath}/${sceneName}/${subComponent}`)) {
        Console.write("Error: Este nombre del subcomponente ya existe");
        return;
    }
    fs.mkdirSync(`${rootPath}/${sceneName}/${subComponent}`)
    generarScssClassFile(sceneName, subComponent, rootPath)
    generarIndexJsFile(subComponent, sceneName, rootPath)
    generarSubSceneClassFile(sceneName, subComponent, rootPath)
}

function crearEscena() {
    return args.length === 1
}

function crearSubcomponenteDeEscena() {
    return args.length === 2
}

