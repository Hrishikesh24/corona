import React, { Component } from 'react';
import './style.css';

let countries = () => {

    return (
        <div>

            <h4 className="h4-countries"> New countries affected </h4>
            <div className="country">
                <p className="name-country"> Russia </p>
                <p className="name-country"> India </p>
                <p className="name-country"> UK </p>
                <p className="name-country"> Finland </p>
                <p className="name-country"> Italy </p>
            </div>
        </div>
    );
};

export default countries; 