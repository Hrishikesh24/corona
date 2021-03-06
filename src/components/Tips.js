import React, { Component } from 'react';
import './style.css';

let tipObject = {
    tips: ["Keep your throat wet at all times", "Avoid touching eyes , nose or mouth", "Frequently wash your hands with alcohol based hand wash", "Avoid close contact with people suffering from fever and cough", "Avoid eating undercooked animal products or raw meat"]

}

let i = 0;

let tips = () => {
    return (
        <div className="internal-tips">
            <h5 className="header"> <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="17.978" height="17.978" viewBox="0 0 17.978 17.978">
                <path id="tips_icon" data-name="tips icon" d="M10.09,8.292h1.8v-1.8h-1.8Zm0,7.191h1.8V10.09h-1.8Zm.89,4.495a8.989,8.989,0,1,1,9-8.989A8.985,8.985,0,0,1,10.98,19.978ZM10.989,3.8a7.191,7.191,0,1,0,7.191,7.191A7.189,7.189,0,0,0,10.989,3.8Z" transform="translate(-2 -2)" fill="#5851db" />
            </svg>
                Tips:
            </h5>

            <p className="para"> • {tipObject.tips[0]}</p>
            <p className="para"> • {tipObject.tips[1]}</p>
            <p className="para"> • {tipObject.tips[2]}</p>
            <p className="para"> • {tipObject.tips[3]}</p>
            <p className="para"> • {tipObject.tips[4]}</p>








        </div>

    );
};

export default tips; 