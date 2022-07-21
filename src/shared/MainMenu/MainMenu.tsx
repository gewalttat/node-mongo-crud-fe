import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import {Logo} from '../static/Logo'
import styles from './MainMenu.module.scss'

export const MainMenu: FC = () => {
    return (
        <div className={styles.parent}>
            <Link to="/" className={styles.parent__navHome}>HOME</Link>
            <Link to="/sweatshirts" className={styles.parent__navSweatshirts}>SWEATSHIRTS</Link>
            <Link to="/t-shirts" className={styles.parent__navTshirts}>T-SHIRTS</Link>
            <Link to="/hoodies" className={styles.parent__navHoodies}>HOODIES</Link>
            <Link to="/contacts" className={styles.parent__navContacts}>CONTACTS</Link>
        </div>
    );
};
