import React from 'react';
import './style.css';


let Alert = () => {
    return (
        <div className="alert-color">
            <h5 className="header-alert"><svg className="svg-alert" xmlns="http://www.w3.org/2000/svg" width="17.978" height="17.978" viewBox="0 0 17.978 17.978">
                <path id="alert_icon" data-name="alert icon" d="M10.09,13.686h1.8v1.8h-1.8Zm0-7.191h1.8v5.393h-1.8ZM10.98,2a8.989,8.989,0,1,0,9,8.989A8.985,8.985,0,0,0,10.98,2Zm.009,16.18a7.191,7.191,0,1,1,7.191-7.191A7.189,7.189,0,0,1,10.989,18.18Z" transform="translate(-2 -2)" fill="#cb1717" />
            </svg>
                Alerts:
            </h5>

            <p className="alert-data"> 2 out of 10 people infected by nCoV die and the increase is exponential. </p>
        </div>
    )
}

export default Alert; 