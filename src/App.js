import './App.css';
import Button from "./components/button/Button";
import Tile from "./components/tile/Tile";
import React, { useState } from "react";
import article3 from './assets/article3.jpg';
import article4 from './assets/article4.jpg';
import Login from './pages/Login';

function App() {


  return (
      <>
        <div className="page-background">
          <header>
            <nav className="navbar">
              <Button title="Home" transparent={true}/>
              <Button title="Inspiratie" transparent={true}/>
              <Button title="Blog" transparent={true}/>
              <div className="vl"></div>
              <Button title="Boek hier" transparent={false}/>
              <Button title="Inloggen" transparent={true}/>
            </nav>

            <section className="header-content">
              <div className="welcome">
                <img src="./assets/Squiqle-line.png" alt=""/>
                <h2>Welkom</h2>
                <img src="./assets/Squiqle-line.png" alt=""/>
              </div>
              <h1>Luxe Tent Overnachtingen</h1>
            </section>
          </header>

          <main>
            <section className="search-field">
              <div className="searchbar">
                <div className="searchbar-item">
                  <label htmlFor="province">Waar wilt u heen?</label>
                  <select name="province" id="province">
                    <option value="geen-voorkeur">Geen voorkeur</option>
                    <option value="drenthe">Drenthe</option>
                    <option value="flevoland">Flevoland</option>
                    <option value="fryslan">Fryslân</option>
                    <option value="gelderland">Gelderland</option>
                    <option value="groningen">Groningen</option>
                    <option value="limburg">Limburg</option>
                    <option value="noord-brabant">Noord-Brabant</option>
                    <option value="noord-holland">Noord-Holland</option>
                    <option value="overijssel">Overijssel</option>
                    <option value="utrecht">Utrecht</option>
                    <option value="zeeland">Zeeland</option>
                    <option value="zuid-holland">Zuid-Holland</option>
                  </select>
                </div>

                <div className="searchbar-item">
                  <label htmlFor="date">Aankomst & Vertrek</label>
                  <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2022-05-26"
                      min="2022-05-26"
                      max="2023-05-26"
                  />
                  <input
                      type="date"
                      id="end"
                      name="trip-end"
                      value="2022-05-26"
                      min="2022-06-26"
                      max="2023-06-26"
                  />
                </div>

                <div className="searchbar-item">
                  <label htmlFor="people-amount">Personen</label>
                  <input
                      type="number"
                      value="1"
                  />
                </div>

                <div className="searchbar-item">
                  <Button title="Zoeken" transparent={false}/>
                </div>
              </div>

              <section className="tents">
                <h2>Ontdek alle bijzondere en luxe tent overnachtingen</h2>
                <Tile
                    image={article3}
                    price="99"
                    nameOfStay="Luxe Tipi Tent aan het meer"
                    city="Loosdrecht"
                    province="Noord-Brabant"
                />
                <Tile
                    image={article4}
                    price="99"
                    nameOfStay="Luxe Tipi Tent aan het meer"
                    city="Loosdrecht"
                    province="Noord-Brabant"
                />
              </section>
              <br/><br/><br/><br/><br/><br/><br/><br/>
            </section>
          </main>
          <footer>
          </footer>
        </div>
      </>
  );
}

export default App;
