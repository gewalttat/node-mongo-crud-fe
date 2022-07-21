import React, {FC} from 'react'
import { Logo } from '../../shared/static/Logo'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <>
    <div className={styles.footerContainer}>
        <div style={{marginBottom: '40px'}}>
        <Logo/>
        </div>
    </div>
    </>
  )
}