import React from "react";
import './Button.css';


function Button({btn}) {

    return(
        <>
            <button
                className="button"
                type="submit"
            >{btn}</button>
        </>
    )

}

export default Button;