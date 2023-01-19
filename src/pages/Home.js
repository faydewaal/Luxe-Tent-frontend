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
import {
    useHistory
} from "react-router-dom";
import Button
    from "../components/Button/Button";


function Home() {
    const [filteredTent, setFilteredTent] = useState([]);
    const [tentId, setTentId] = useState([]);
    const history = useHistory();
    const [search, setSearch] = useState('')
    console.log(search)

    useEffect(() => {
        async function getFilteredTenten() {
            try {
                const result = await axios.get("http://localhost:8080/tents/all");
                console.log("data: " + result.data);
                setFilteredTent(result.data);
            } catch (e) {
                console.error(e);
            }
        }


        getFilteredTenten();

    },[]);

    function getTent(tentId) {
        console.log("komt ie hier?")
        history.push('/accomodatie?deTentId='+tentId);
    }

    return (
        <>
            <PageBanner
                bannerImage={tent}
                bannerTitle="Welkom!"
                bannerMessage="Ontdek alle unieke en luxe tenten"
            />

            <section className="homepage-content">
                    <form action="form" className="searchbar" onChange={(e) => setSearch(e.target.value)}>
                        <div className="searchbar-item">
                            <label htmlFor="province">Waar wilt u heen?</label>
                            <select className="input-field" name="province" id="province">
                                <option value="">Geen voorkeur</option>
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
                            <label htmlFor="people-amount">Personen</label>
                            <input
                                className="input-field"
                                type="number"
                                placeholder="1"
                            />
                        </div>

                        <div className="searchbar-item">
                            <Button
                                btn="zoeken"
                            />
                        </div>
                    </form>
            </section>


            <section className="tents extra-margin">
                {filteredTent.filter((item)=> {
                    return search.toLowerCase() === '' ? item : item.province.toLowerCase().includes(search)
                }).map((tent, index) => {
                    return <div onClick={()=>getTent(tent.id)}>
                        <Tile
                            name={index}
                            key={index}
                            url={index}
                            title={tent.title}
                            image={tent.file && <img src={tent.file.url} alt={tent.file.fileName}/>}
                            price={tent.pricePerNight}
                            city={tent.city}
                            province={tent.province}
                        />
                    </div>
                })}
            </section>
        </>
    );
}

export default Home;
