import React from "react";
import './Input.css';

const Input = ({attribute,handleChange,param}) =>{
    return (
        <div className='input-container'>
            <input
            id={attribute.id}
            // className={ param ? 'input-error' :'regular-style'}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange=''
            className='hola'
            />
        </div>
    )
};

export default Input;
