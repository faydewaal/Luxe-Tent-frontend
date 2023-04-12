import React
    , {
    useState
} from "react";
import './SingleTent.css'
import {
    useEffect
} from "react";
import axios
    from "axios";

function SingleTent() {

    const [tentData, setTentData] = useState([]);

    const url_string = window.location.href;
    const url = new URL(url_string);
    const paramValue = url.searchParams.get("deTentId");
    console.log(paramValue)

    useEffect(() => {
        async function fetchTentData() {
            try {
                const result = await axios.get("http://localhost:8080/tents/"+paramValue);
                console.log("data: " + result.data);
                setTentData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchTentData();
    },[paramValue]);

    return (
        <>
            <section class="fhoto">
                <img src={tentData.file && tentData.file.url} alt={tentData.filename}/>
            </section>
            <section class="tentInfo">
                <h1>{tentData.title}</h1>
                <p>{tentData.description}</p>
                <h4>Prijs: {tentData.pricePerNight}</h4>
                <h4>Geschikt voor {tentData.maxNumberOfPersons} personen</h4>
                <h4>Adres:</h4>
                <h6>{tentData.street} {tentData.houseNumber}</h6>
                <h6>{tentData.city}</h6>
            </section>

        </>
    );

}

export default SingleTent;
