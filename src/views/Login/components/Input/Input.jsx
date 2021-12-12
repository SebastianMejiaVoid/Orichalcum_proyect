import React from "react";
import './Input.css';

const Input = ({attribute,handleChange,value}) =>{
    return (
        <div className='input-container'>
            <input
            id={attribute.id}
            // className={ param ? 'input-error' :'regular-style'}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={handleChange}
            className='hola'
            value={value}
            />
        </div>
    )
};

export default Input;
