import React from "react";
import './Tile.css';


function Tile({image, city, province, price, naam}) {

    return(
        <>
        <article className="tile">
                <div className="tile-img">{image}</div>
                <div className="info">
                    <h2>{naam}</h2>
                    <h3>{city}, {province}</h3>
                    <h3>€ {price}<span className="smaller-text"> / nacht</span></h3>
                </div>
        </article>
        </>
    )

}

export default Tile;