import React from 'react';
import styles from './Body.module.scss';

const Body = ({ text }) => { 
    return (
        <div className={styles.body_container}>
            <div className={styles.welcome_text}>{text}</div>
        </div>
    );
};

export default Body;
