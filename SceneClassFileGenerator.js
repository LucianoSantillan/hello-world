const {lowerFirstLetter, replaceAll} = require('./utils/StringUtils.js')
const fs = require('fs')

let sceneClassFile =  `import { useState } from 'react'
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

function generarSceneClassFile(sceneName, rootPath) {  
    sceneClassFile = replaceAll(sceneClassFile, "##upperName", sceneName)
    sceneClassFile = replaceAll(sceneClassFile, '##lowerName', lowerFirstLetter(sceneName))
    fs.writeFileSync(`${rootPath}/${sceneName}/${sceneName}.jsx`, sceneClassFile)
}

exports.generarSceneClassFile = generarSceneClassFile