import React from "react";
import './ButtonGrey.css';


function ButtonGrey({btnName}) {

    return(
        <>
            <button
                className="buttonGrey"
                type="submit"
            >{btnName}</button>
        </>
    )

}

export default ButtonGrey;