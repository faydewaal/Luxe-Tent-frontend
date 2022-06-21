import React from "react";
import './Tile.css';


function Tile({image, city, province, price, naam}) {

    return(
        <>
        <article className="tile">
                <div>{image}</div>
                <div className="info">
                    <h3>{naam}</h3>
                    <h3>{city}, {province}</h3>
                    <h3>€ {price} / nacht</h3>
                </div>
        </article>
        </>
    )

}

export default Tile;