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



function Home() {
    const [filteredTent, setFilteredTent] = useState([]);
    const [tentId, setTentId] = useState([]);
    const history = useHistory();
    const [search, setSearch] = useState({
        provinceSearch: '',
        peopleAmountSearch: ''
    })
    const handleSearchbar = e => {
        setSearch({...search, 
            provinceSearch: e.target.value, 
            peopleAmountSearch: e.target.value})
    }

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
                    <form action="form" className="searchbar" >
                        <section className="searchbar-item">
                            <label htmlFor="province">Waar wilt u heen?</label>
                            <select className="input-field" 
                            name="province" 
                            id="province" 
                            onChange={(e) => handleSearchbar(e)}>
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
                        </section>

                        <section className="searchbar-item">
                            <label htmlFor="people-amount">Personen</label>
                            <select
                                className="input-field"
                                onChange={(e) => handleSearchbar(e)}>
                                    <option value="">geen voorkeur</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                            </select>
                        </section>
                    </form>
            </section>


            <section className="tents extra-margin">
                {filteredTent.filter((item)=> {
                    const { provinceSearch, peopleAmountSearch} = search;
                    if (provinceSearch && peopleAmountSearch) {
                        console.log("testje " + peopleAmountSearch)
                        return item.province.toLowerCase().includes(provinceSearch.toLowerCase());
                    }  
                     return true; 
                }).map((tent, index) => {
                    return <section onClick={()=>getTent(tent.id)}>
                        <Tile
                            name={index}
                            key={index}
                            url={index}
                            title={tent.title}
                            image={tent.file && <img src={tent.file.url} alt={tent.file.fileName}/>}
                            price={tent.pricePerNight}
                            city={tent.city}
                            province={tent.province}
                            maxPeople={tent.maxNumberOfPersons}
                        />
                    </section>
                })}
            </section>
        </>
    );
}

export default Home;
