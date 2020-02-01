import React, { Component } from 'react';
import logo from './coronavirus.jpg'
let Article = () => {
    return (
        <div >
            <a href="https://www.google.com/search?rlz=1C5CHFA_enIN866IN866&tbm=nws&sxsrf=ACYBGNQCkubfJBDa9r9lhE0htjo2YUh9DA:1580553140650&q=Coronavirus&spell=1&sa=X&ved=0ahUKEwjKxvyjk7DnAhVw8XMBHZAEB2MQBQgmKAA&biw=1440&bih=798&dpr=2">
                <img className="img" src={logo} />
            </a>

        </div>
    );
}

export default Article; 