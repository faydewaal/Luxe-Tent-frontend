import React
    , {
    useEffect,
    useState
} from "react";
import PageBanner
    from "../components/page-banner/PageBanner";
import natuur from '../assets/natuur.jpg';
import './LuxeTenten.css';


function LuxeTenten() {

    return (
        <>

            <PageBanner
            bannerImage={natuur}
            bannerTitle="Wandelroutes en unieke activiteiten"
            bannerMessage="In elke provicie vind u iets moois"
            />

            <div class="inform">
                <p>Als ik de app verder uit zou breiden dan zou ik en functie toevoegen voor gebruikers die een tent plaatsen. Ze zouden dan de optie hebben een mooie wandelroute of unieke activiteit toe te voegen. Op deze pagina zou dan een verzameling ontstaan van alle wandelroutes en activiteiten. De huurder kan vervolgens op deze pagina naar verschillended activiteiten zoeken</p>
            </div>

        </>

    )

}

export default LuxeTenten;