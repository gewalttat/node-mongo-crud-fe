import React from 'react';
import styles from './HomeCards.module.scss';


export default function HomeCards() {
    return (
        <div className={styles.homeCardsContainer}>
            <div className={styles.homeCardsContainer__woman}>
                <img src={require("../../shared/static/jpg/women_look.webp")}
                    alt='woman'
                    className={styles.homeCardsContainer__womanImage} />
                <div className={styles.homeCardsContainer__womanText}>WOMAN</div>
            </div>
            <div className={styles.homeCardsContainer__man}>
                <img src={require("../../shared/static/jpg/men_look.jpeg")}
                    alt='man'
                    className={styles.homeCardsContainer__womanImage} />
                <div className={styles.homeCardsContainer__manText}>MAN</div>
            </div>
        </div>
    )
}