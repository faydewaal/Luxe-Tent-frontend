import React from "react";
import './Tile.css';


function Tile({image, city, province, price, title}) {

    return(
        <>
        <article className="tile">
                <div className="tile-img" >{image}</div>
                <div className="info">
                    <h2>{title}</h2>
                    <h3>{city}, {province}</h3>
                        <div className="naast">
                            <h3>€ {price}<span className="smaller-text"> / nacht</span></h3>
                            <div className="green-button">Bekijk</div>
                        </div>

                </div>
        </article>
        </>
    )

}

export default Tile;