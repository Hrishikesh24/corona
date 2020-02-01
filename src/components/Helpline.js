import React, { Component } from 'react';

let helpline = () => {
    return (
        <div className="helpline-contant">
            <div> Consult a doctor <b> now </b> if you have constant <b> fever </b>, <b> cough </b>, <b> pneumonia</b>, <b> diarrhea</b> or <b> breathing problems</b></div>
            <div className="breakLine">
                <a href="tel:+9101123978046">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path id="call_now" data-name="call now" d="M6.62,10.79a15.149,15.149,0,0,0,6.59,6.59l2.2-2.2a.994.994,0,0,1,1.02-.24,11.407,11.407,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.25,1.02Z" transform="translate(-3 -3)" fill="#5851db" />
            </svg> Contact Helpline
                </a></div>
        </div>

    )

}



export default helpline; 