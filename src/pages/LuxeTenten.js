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

            <article class="inform">
                <p>Een uitbreiding van mijn concept die mij leuk lijkt om toe te passen in de toekomst is dat mensen die hun accommodatie beschikbaar stellen voor verhuur ook een leuke activiteit in de buurt kunnen toevoegen. Als de app groeit en meer en meer mensen hun accommodatie toevoegen en ook activiteiten in de buurt van hun accommodatie dan kunnen de bezoekers/huurder ook zoeken op leuke activiteiten en hier hun accommodatie op uitkiezen. Of natuurlijk andersom dat als ze een accommodatie geboekt hebben dat ze ook kunnen kijken wat voor leuks er in de buurt te doen is. Dit is dus leuk voor de huurder, maar ook een kans voor huurders om hun accommodatie extra aantrekkelijk te maken door te laten weten wat er allemaal in de buurt te doen is. </p>
            </article>

        </>

    )

}

export default LuxeTenten;