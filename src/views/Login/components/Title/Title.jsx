import React from "react";
import './Title.css';

const Title = (props)=>{
    return(
        <div className='title-container'>
            {props.text}
        </div>
    )
};

export default Title;