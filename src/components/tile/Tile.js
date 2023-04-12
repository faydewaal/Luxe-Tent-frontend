import React from "react";
import './Tile.css';


function Tile({image, city, province, price, title, maxPeople}) {

    return(
        <>
        <article className="tile">
                <section className="tile-img" >{image}</section>
                <section className="info">
                    <h2>{title}</h2>
                    <h3>{city}, {province}</h3>
                        <section className="naast">
                            <h3>€ {price}<span className="smaller-text"> / nacht</span></h3>
                            <section className="green-button">Bekijk</section>
                        </section>
                </section>
        </article>
        </>
    )

}

export default Tile;