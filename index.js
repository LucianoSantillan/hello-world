#!/usr/bin/env node
// index.js

const { generarSceneClassFile } = require('./SceneClassFileGenerator.js')
const { generarScssClassFile } = require('./ScssFileGenerator.js')
const { generarStoreClassFile } = require('./StoreFileGenerator.js')
const Console = require('./utils/Console.js')
const {capitalizeFirstLetter} = require('./utils/StringUtils.js')
const fs = require('fs')

const rootPath = 'src/scenes'

if (!fs.existsSync(rootPath)) {
    Console.write(`error: Para poder crear la scena, la ruta ${rootPath} debe existir`)
}
Console.write("Escriba el nombre de la scene \n")
Console.read("data", (data) => {
    let sceneName = capitalizeFirstLetter(data.toString().trim());
    if (fs.existsSync(`${rootPath}/${sceneName}`)) {
        Console.write("Este nombre de escena ya existe, elija otro:");
        return;
    }
    fs.mkdirSync(`${rootPath}/${sceneName}`)
    generarSceneClassFile(sceneName, rootPath)
    generarScssClassFile(sceneName, rootPath)
    generarStoreClassFile(sceneName, rootPath)
})