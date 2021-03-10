const {lowerFirstLetter, replaceAll} = require('./utils/StringUtils.js')
const fs = require('fs')

let subSceneClassFile =  `import { useState } from 'react'
import { observer } from 'mobx-react'
// import { useTranslation } from 'react-i18next'
import ##upperSceneNameStore from '../##upperSceneNameStore'
// import styles from './##lowerName.module.scss'

const ##upperSubSceneName = () => {
  // const { t } = useTranslation()
  const [##lowerNameStore] = useState(new ##upperSceneNameStore())
  return (
   <div></div>
  )
}

export default observer(##upperSubSceneName)
    `;

function generarSubSceneClassFile(sceneName, subSceneName, rootPath) {  
    subSceneClassFile = replaceAll(subSceneClassFile, "##upperSceneName", sceneName)
    subSceneClassFile = replaceAll(subSceneClassFile, '##lowerName', lowerFirstLetter(sceneName))
    subSceneClassFile = replaceAll(subSceneClassFile, '##upperSubScene', subSceneName)
    fs.writeFileSync(`${rootPath}/${sceneName}/${subSceneName}/${subSceneName}.jsx`, subSceneClassFile)
}

exports.generarSubSceneClassFile = generarSubSceneClassFile