const { replaceAll } = require("./utils/StringUtils.js");
const fs = require('fs')

function generarStoreClassFile(sceneName, rootPath){
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
    fs.writeFileSync(`${rootPath}/${sceneName}/${sceneName}Store.js`, contenido)
}

exports.generarStoreClassFile = generarStoreClassFile