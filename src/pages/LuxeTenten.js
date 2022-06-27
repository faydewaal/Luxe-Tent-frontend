import React
    , {
    useEffect,
    useState
} from "react";
import PageBanner
    from "../components/page-banner/PageBanner";
import tentPanorama from '../assets/tent-panorama.jpg';
import Tile
    from "../components/tile/Tile";
import './LuxeTenten.css';
import axios
    from "axios";


function LuxeTenten() {
    const [tent, setTent] = useState([]);


    useEffect(() => {
        async function FetchTenten() {
            try {
                const result = await axios.get("http://localhost:8080/tents");
                console.log(result.data);
                setTent(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        FetchTenten();

    },[]);

    return (
        <>

            <PageBanner
            bannerImage={tentPanorama}
            bannerTitle="Luxe Tenten"
            bannerMessage="Vind een tent die bij u past"
            />

            <section className="tents">
                {tent.map((tentItem, index) => {
                    return <Tile
                    name={index}
                    key={index}
                    url={index}
                    naam={tentItem.name}
                    image={tentItem.file && <img src={tentItem.file.url} alt={tentItem.name}/>}
                    price={tentItem.pricePerNight}
                    city={tentItem.city}
                    province={tentItem.province}
                    />
                })}
            </section>
        </>

    )

}

export default LuxeTenten;