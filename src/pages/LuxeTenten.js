import React
    , {
    useEffect,
    useState
} from "react";
import PageBanner
    from "../components/page-banner/PageBanner";
import article3 from '../assets/article3.jpg';
import Tile
    from "../components/tile/Tile";
import './LuxeTenten.css'
import axios
    from "axios";


function LuxeTenten() {
    const [tent, setTent] = useState();

    useEffect(() => {
        async function fetchTenten() {
            try {
                const result = await axios.get("http://localhost:8080/tent");
                console.log(result.data);
                setTent(result.data)
            } catch (e) {
                console.error(e);
            }
        }
        fetchTenten()
    },[]);

    return (
        <>
            <PageBanner
            bannerImage={article3}
            bannerTitle="Luxe Tenten"
            bannerMessage="Vind een tent die bij u past"
            />

            {/*{Object.keys(tent).length > 0 &&*/}
            {/*    <div className="test">*/}
            {/*        <h1>{tent[0].title}</h1>*/}
            {/*        <h2>omschrijving*/}
            {/*            van*/}
            {/*            tent</h2>*/}
            {/*        <h2>prijs</h2>*/}
            {/*        <h2>hoeveelheid*/}
            {/*            mensen</h2>*/}
            {/*    </div>*/}
            {/*}*/}

            <section className="tents">
                <Tile
                    image={article3}
                    price="99"
                    nameOfStay="hoi"
                    city="Loosdrecht"
                    province="Noord-Brabant"
                />
                <Tile
                    image={article3}
                    price="99"
                    nameOfStay="Luxe Tipi Tent aan het meer"
                    city="Loosdrecht"
                    province="Noord-Brabant"
                />
                <Tile
                    image={article3}
                    price="99"
                    nameOfStay="Luxe Tipi Tent aan het meer"
                    city="Loosdrecht"
                    province="Noord-Brabant"
                />
                <Tile
                    image={article3}
                    price="99"
                    nameOfStay="Luxe Tipi Tent aan het meer"
                    city="Loosdrecht"
                    province="Noord-Brabant"
                />
            </section>
        </>

    )

}

export default LuxeTenten;