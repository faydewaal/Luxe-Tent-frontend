import React from 'react';
import './Button.css'
import {
    useHistory
} from "react-router-dom";

function Button({title}) {
    const history = useHistory();

    function handleClick() {
        history.push("/login-pagina")
    }


    return(
        <button
            className={'button' }
            type="button"
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default Button;