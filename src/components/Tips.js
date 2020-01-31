import React, { Component } from 'react';

let tipObject = {
  tips :  ["Keep your throat wet at all times", "Avoid touching eyes , nose or mouth", "Frequently wash your hands with alcohol based hand wash","Avoid close contact with people suffering from fever and cough","Avoid spitting in public","Don't travel while feeling sick","Avoid eating undercooked animal products or raw meat"]

}

let i = 0; 

let tips = () => {
    return (
        <div> 
            <h4>Tips</h4> 

            <p> •{tipObject.tips[0]} </p> 
            <p> •{tipObject.tips[1]}</p> 
            <p> •{tipObject.tips[2]}</p> 
            <p> •{tipObject.tips[3]}</p> 
            <p> •{tipObject.tips[4]}</p> 
            <p> •{tipObject.tips[5]}</p> 
            <p> •{tipObject.tips[6]}</p> 


            
         </div> 

    );
};

export default tips; 