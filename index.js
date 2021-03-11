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
const { createScene } = require('./SceneCreator.js')
const { createSubScene } = require('./SubSceneCreator.js')
const { rootPath } = require('./constants.js')

const args = process.argv.slice(2)

if (!fs.existsSync(rootPath)) {
    Console.write(`Error: Para poder crear la scena, la ruta ${rootPath} debe existir`)
    return;
}

const firstParam = args[0].toString().trim()
if (firstParam) {
    if (firstParam === 's') {
        let sceneName = capitalizeFirstLetter(args[1].toString().trim());
        createScene(sceneName);
    }
    else if (firstParam === 'ss') {
        let sceneName = capitalizeFirstLetter(args[1].toString().trim());
        let subComponent = capitalizeFirstLetter(args[2].toString().trim());
        createSubScene(sceneName, subComponent);
    }
    else if (firstParam === 'abm') { 
        Console.write("ABM section :)")
    }
    else {
        Console.write("Error: Incorrect params. Pay atention!")
    }

}

