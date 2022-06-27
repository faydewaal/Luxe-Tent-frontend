import React
    , {
    useEffect,
    useState
} from "react";
import './Home.css';
import Tile
    from "../components/tile/Tile";
import PageBanner
    from "../components/page-banner/PageBanner";
import axios
    from "axios";
import tent from '../assets/tent.jpg';


function Home() {
    const [filteredTent, setFilteredTent] = useState([]);

    useEffect(() => {
        async function getFilteredTenten() {
            try {
                const result = await axios.get("http://localhost:8080/tents");
                console.log("data: " + result.data);
                setFilteredTent(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getFilteredTenten();

    },[]);

    return (
        <>
            <PageBanner
            bannerImage={tent}
            bannerTitle="Welkom"
            bannerMessage="Ontdek alle unieke en luxe tenten"
            />

            <section className="homepage-content">
                    <form action="form" className="searchbar">
                        <div className="searchbar-item">
                            <label htmlFor="province">Waar wilt u heen?</label>
                            <select className="input-field" name="province" id="province">
                                <option value="geen-voorkeur">Geen voorkeur</option>
                                <option value="drenthe">Drenthe</option>
                                <option value="flevoland">Flevoland</option>
                                <option value="friesland">Friesland</option>
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
                            <div className="flex-horizontal">
                                <input
                                    className="input-field"
                                    type="date"
                                    id="start"
                                    name="trip-start"
                                    placeholder="2022-05-26"
                                    min="2022-05-26"
                                    max="2023-05-26"
                                />
                                <input
                                    className="input-field"
                                    type="date"
                                    id="end"
                                    name="trip-end"
                                    placeholder="2022-05-26"
                                    min="2022-06-26"
                                    max="2023-06-26"
                                />
                            </div>
                        </div>
                        <div className="searchbar-item">
                            <label htmlFor="people-amount">Personen</label>
                            <input
                                className="input-field"
                                type="number"
                                placeholder="1"
                            />
                        </div>

                        <div className="searchbar-item">
                            <button
                                className={'button'}
                                type="submit"
                            >Zoeken
                            </button>
                        </div>
                    </form>
            </section>

            <section className="tents extra-margin">
                {filteredTent.map((tent, index) => {
                    return <Tile
                        name={index}
                        key={index}
                        url={index}
                        naam={tent.name}
                        image={tent.file && <img src={tent.file.url} alt={tent.name}/>}
                        price={tent.pricePerNight}
                        city={tent.city}
                        province={tent.province}
                    />
                })}
            </section>
        </>
    );
}

export default Home;
