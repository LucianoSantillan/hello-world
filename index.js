#!/usr/bin/env node
// index.js

const Console = require('./utils/Console.js')
const fs = require('fs')
const { createScene } = require('./SceneCreator.js')
const { createSubScene } = require('./SubSceneCreator.js')
const { rootPath } = require('./constants.js')
const { createABM } = require('./ABMCreator.js')

const args = process.argv.slice(2)

if (!fs.existsSync(rootPath)) {
    Console.write(`Error: Para poder crear la scena, la ruta ${rootPath} debe existir`)
    return;
}

const firstParam = args[0].toString().trim()
if (firstParam) {
    if (firstParam === 's') {
        createScene(args);
    }
    else if (firstParam === 'ss') {
        createSubScene(args);
    }
    else if (firstParam === 'abm') {
        createABM(args)
    }
    else {
        Console.write("Error: Incorrect params. Pay atention!")
    }

}

