import React from 'react';
import './Button.css'

function Button({title, transparent}) {
    return(
        <button className={transparent === true ? 'button-transparent' : 'button' } type="button" onClick={() => console.log({title})}>{title}</button>
    )
}

export default Button;