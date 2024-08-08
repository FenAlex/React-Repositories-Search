import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = ({ onTextChange }) => {
    const [inputValue, setInputValue] = useState(''); 
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        onTextChange(inputValue); 
        setInputValue(''); 
    };

    return (
        <header className={styles.app_header}>
            <div className={styles.search_container}>
                <input 
                    type="text" 
                    className={styles.search_input}
                    placeholder="Введите поисковый запрос" 
                    value={inputValue}
                    onChange={handleInputChange} 
                />
                <button className={styles.search_button} onClick={handleButtonClick}>
                    искать
                </button>
            </div>
        </header> 
    );
};

export default Header;
