import React, { useState } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import styles from './App.module.scss';

function App() {
    const [bodyText, setBodyText] = useState('Добро пожаловать');

    const handleTextChange = (newText) => {
        setBodyText(newText);
    };

    return (
        <div className={styles.App}>
            <Header onTextChange={handleTextChange} />
            <Body text={bodyText} />
            <Footer />
        </div>
    );
}

export default App;
