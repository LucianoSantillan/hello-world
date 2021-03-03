import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
import CasasStore from './CasasStore'
// import styles from './casas.module.scss'

const Casas = () => {
  // const { t } = useTranslation()
  const [Store] = useState(new CasasStore())
  return (
   <div></div>
  )
}

export default Casas
    