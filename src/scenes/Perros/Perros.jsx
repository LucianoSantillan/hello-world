import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
import PerrosStore from './PerrosStore'
// import styles from './perros.module.scss'

const Perros = () => {
  // const { t } = useTranslation()
  const [perrosStore] = useState(new PerrosStore())
  return (
   <div></div>
  )
}

export default Perros
    