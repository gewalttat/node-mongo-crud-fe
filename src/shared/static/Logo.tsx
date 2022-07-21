import React, {FC} from 'react';
import {ReactComponent as Logotype} from '../static/svg/logo.svg'
import styles from './Logo.module.scss'

export const Logo: FC = () =>  {
    return (
      <div className={styles.logoContainer}>
        <div className={styles.logoContainer__logo}>
        Lonely 
        <div className={styles.logoContainer__logo__SVG}>
          <Logotype/>
          </div>
        Club
        </div>
        <div className={styles.logoContainer__logoSubText}>
        почему тебя так долго нет?
        </div>
      </div>
    );
}
