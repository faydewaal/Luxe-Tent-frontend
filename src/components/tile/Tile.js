import React from "react";
import './Tile.css';

function Tile({image, price, nameOfStay, city, province}) {
    return(
        <article className="tile">
            <img src={image} alt={nameOfStay}/>
            <div className="horizontal">
                <p>{price}<span> p.n.</span></p>
                <div className="vertical">
                    <h4>{nameOfStay}</h4>
                    <div className="horizontal-spacing">
                        <h5>{city}, {province}</h5>
                        <button className="tile-button">Bekijk</button>
                    </div>
                </div>

            </div>
        </article>
    )

}

export default Tile;