import React
    , {
    useState
} from "react";
import './UserProfile.css'
import PageBanner
    from "../components/page-banner/PageBanner";
import tent
    from "../assets/tent.jpg";


function UserProfile() {
    const [toggle, setToggle] = useState(false)

    return (
        <section className="center-page">
            <PageBanner
                bannerImage={tent}
                bannerTitle="Welkom op uw profiel"
                bannerMessage="naam persoon"
            />
            <div className="center">
                <button onClick={() => setToggle(!toggle)} className="add-tent">Voeg een tent toe</button>
            </div>


            <div className="overview">
                <h2>hieronder een overzicht van al uw tenten</h2>

                {toggle && (
                    <form className="tent-form" id="tent-upload" action="form">
                        <button className="x-toggle" onClick={() => setToggle(!toggle)}>X</button>

                        <label htmlFor="name">Naam van accomodatie:</label>
                        <input type="text" name="name" id="name"/>

                        <label htmlFor="message">Vertel wat over de accomodatie:</label>
                        <input type="field" name="message" id="message"/>

                        <h4>voeg foto's toe</h4>

                        <label htmlFor="city">Plaatsnaam:</label>
                        <input type="text" name="city" id="city"/>

                        <label htmlFor="province">Provincie:</label>
                        <select name="province" id="province">
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

                        <label htmlFor="people-amount">Hoeveel personen kunnen hier verblijven?</label>
                        <input
                            type="number"
                            placeholder="1"
                        />

                        <label htmlFor="name">Prijs per nacht:</label>
                        <input type="number"
                               placeholder="99"
                        />

                        <p>Welke extra opties bied u aan?</p>
                        <input type="checkbox" name="option" id="fietsen" value="Fietsen"/>
                        <label htmlFor="fietsen">Fietsen</label>
                        <input type="checkbox" name="option" id="Jacuzie" value="jacuzie"/>
                        <label htmlFor="jacuzie">jacuzie</label>
                        <input type="checkbox" name="option" id="Barbeque" value="jacuzie"/>
                        <label htmlFor="barbeque">Barbeque</label>
                    </form>
                )}
            </div>

        </section>
    )
}

export default UserProfile;