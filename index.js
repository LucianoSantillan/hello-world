const fs = require('fs')

class Console {
    static write(text) {
        process.stdout.write(text)
    }

    static read(event, callback) {
        process.stdin.on(event, callback)
    }
}

if (!fs.existsSync("src/scenes")) {
    Console.write("la ruta src/scenes debe existir")
}
Console.write("Escriba el nombre de la scene")
Console.read("data", (data) => {
    let sceneName = capitalizeFirstLetter(data.toString().trim());
    if (fs.existsSync(`src/scenes/${sceneName}`)) {
        Console.write("La carpeta de la escena ya existe");
        return
    }
    crearCarpeta(sceneName);
    generarSceneClassFile(sceneName)
    generarScssClassFile(sceneName)
    generarStoreClassFile(sceneName)
})

function crearCarpeta(sceneName) {
    fs.mkdirSync(`src/scenes/${sceneName}`)
}

function generarSceneClassFile(sceneName) {
    var contenido =
        `import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
import ##upperNameStore from './##upperNameStore'
// import styles from './##lowerName.module.scss'

const ##upperName = () => {
  // const { t } = useTranslation()
  const [##lowerNameStore] = useState(new ##upperNameStore())
  return (
   <div></div>
  )
}

export default ##upperName
    `;
    contenido = replaceAll(contenido, "##upperName", sceneName)
    contenido = replaceAll(contenido, '##lowerName', lowerFirstLetter(sceneName))
    fs.writeFileSync(`src/scenes/${sceneName}/${sceneName}.jsx`, contenido)
}

function generarStoreClassFile(sceneName){
    var contenido =
        `import { AsyncStore } from 'subFramework'
import { makeObservable } from 'mobx'

class ##upperNameStore extends AsyncStore {

    constructor() {
        super()
        this.makeObservables()
    }

    makeObservables() {
        makeObservable(this, {
          // observables
          // actions
        })
      }

export default ##upperNameStore
           `;
    contenido = replaceAll(contenido, "##upperName", sceneName)
    fs.writeFileSync(`src/scenes/${sceneName}/${sceneName}Store.js`, contenido)
}

function generarScssClassFile(sceneName) {
    fs.writeFileSync(`src/scenes/${sceneName}/${lowerFirstLetter(sceneName)}.module.scss`, "")
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function replaceAll(allText, search, replace) {
    return allText.split(search).join(replace)
}