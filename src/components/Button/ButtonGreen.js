import React from "react";
import './ButtonGreen.css';


function ButtonGreen({btnName}) {

    return(
        <>
            <button
                className="buttonGreen"
                type="submit"
            >{btnName}</button>
        </>
    )

}

export default ButtonGreen;