import React from "react";
import './Label.css';

const Label = ({text,className}) =>{
    return(
        <div className="label-container">
            <label>
            {text}
            </label>
        </div>
    )
}

export default Label;