import React from "react";
import './Tile.css';

function Tile({image, price, nameOfStay, city, province}) {
    return(
        <article className="tile">
            <img className="tile-img" src={image} alt={nameOfStay}/>
            <div className="info">
                <h3>{nameOfStay}</h3>
                <h3>{city}{province}</h3>
                <h3>€ {price} / nacht</h3>
            </div>
        </article>
    )

}

export default Tile;