import React
    , {
    useState
} from "react";
import './UserProfile.css'
import PageBanner
    from "../components/page-banner/PageBanner";
import tent
    from "../assets/tent.jpg";
import axios
    from "axios";


function UserProfile() {
    const [toggle, setToggle] = useState(false)
    const [tentName, setTentName] = useState('');
    const [tentDescription, setTentDescription] = useState('');
    const [tentPricePerNight, setTentPricePerNight] = useState('');
    const [tentMaxNumberOfPersons, setTentMaxNumberOfPersons] = useState('');
    const [addSucces, toggleAddSucces] = useState(false);
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');

    async function addTent(e) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/tents', {
                name: tentName,
                description: tentDescription,
                pricePerNight: tentPricePerNight,
                MaxNumberOfPersons: tentMaxNumberOfPersons
            });

            console.log(response.data);
            toggleAddSucces(true);
        } catch (e) {
            console.error(e);
        }
    }

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile))
    }

    async function sendImage(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        console.log(formData);

        try {
            const result = await axios.post('https://localhost:8080/tents/1003/photo', formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            console.log(result.data);
        } catch (e) {
            console.error(e)
        }
    }

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

                {addSucces === true && <h3>Een nieuwe tent is toegevoegd!</h3>}

                {toggle && (
                    <form onSubmit={addTent || sendImage} className="tent-form" id="tent-upload" action="/">
                        <button className="x-toggle" onClick={() => setToggle(!toggle)}>X</button>

                        <label htmlFor="tent-name">Naam van accomodatie:</label>
                        <input
                            onChange={(e) => setTentName(e.target.value)}
                            type="text"
                            name="tent-name"
                            id="tent-name"
                            value={tentName}
                        />

                        <label htmlFor="message">Vertel wat over de accomodatie:</label>
                        <input
                            type="field"
                            name="message"
                            id="message"
                            value={tentDescription}
                            onChange={(e) => setTentDescription(e.target.value)}
                        />

                        <label htmlFor="tent-image">
                            Voeg een foto toe
                        <input type="file" name="tent-image" id="tent-image" onChange={handleImageChange}/>
                            <label/>
                            Preview:
                            <img src={previewUrl} alt="Voorbeeld van afbeelding die u zojuist heeft gekozen" className="image-preview"/>
                        </label>

                        {/*<label htmlFor="city">Plaatsnaam:</label>*/}
                        {/*<input type="text" name="city" id="city"/>*/}

                        {/*<label htmlFor="province">Provincie:</label>*/}
                        {/*<select name="province" id="province">*/}
                        {/*    <option value="drenthe">Drenthe</option>*/}
                        {/*    <option value="flevoland">Flevoland</option>*/}
                        {/*    <option value="friesland">Friesland</option>*/}
                        {/*    <option value="gelderland">Gelderland</option>*/}
                        {/*    <option value="groningen">Groningen</option>*/}
                        {/*    <option value="limburg">Limburg</option>*/}
                        {/*    <option value="noord-brabant">Noord-Brabant</option>*/}
                        {/*    <option value="noord-holland">Noord-Holland</option>*/}
                        {/*    <option value="overijssel">Overijssel</option>*/}
                        {/*    <option value="utrecht">Utrecht</option>*/}
                        {/*    <option value="zeeland">Zeeland</option>*/}
                        {/*    <option value="zuid-holland">Zuid-Holland</option>*/}
                        {/*</select>*/}

                        <label htmlFor="people-amount">Hoeveel personen kunnen hier verblijven?</label>
                        <input
                            type="number"
                            placeholder="1"
                            id="people-amount"
                            value={tentMaxNumberOfPersons}
                            onChange={(e) => setTentMaxNumberOfPersons(e.target.value)}
                        />

                        <label htmlFor="price-per-night">Prijs per nacht:</label>
                        <input type="number"
                               placeholder="99"
                               id="price-per-night"
                               value={tentPricePerNight}
                               onChange={(e) => setTentPricePerNight(e.target.value)}
                        />

                        {/*<p>Welke extra opties bied u aan?</p>*/}
                        {/*<input type="checkbox" name="option" id="fietsen" value="Fietsen"/>*/}
                        {/*<label htmlFor="fietsen">Fietsen</label>*/}
                        {/*<input type="checkbox" name="option" id="Jacuzie" value="jacuzie"/>*/}
                        {/*<label htmlFor="jacuzie">jacuzie</label>*/}
                        {/*<input type="checkbox" name="option" id="Barbeque" value="jacuzie"/>*/}
                        {/*<label htmlFor="barbeque">Barbeque</label>*/}

                        <button type="submit">Verstuur</button>
                    </form>
                )}
            </div>

        </section>
    )
}

export default UserProfile;