import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import './Profile.css'
import PageBanner from "../components/page-banner/PageBanner";
import tent from "../assets/tent.jpg";
import axios from "axios";
import {
    AuthContext
} from "../context/AuthContext";
import Tile
    from "../components/tile/Tile";


function Profile() {
    const {user: {username}} = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const [profileData, setProfileData] = useState([]);

    const [toggle, setToggle] = useState(false)
    const [title, setTitle] = useState('');
    const [tentDescription, setTentDescription] = useState('');
    const [tentPricePerNight, setTentPricePerNight] = useState('');
    const [tentMaxNumberOfPersons, setTentMaxNumberOfPersons] = useState('');
    const [addSucces, toggleAddSucces] = useState(false);
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');
    const [streetName, setStreetName] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [tentOptions, setTentOptions] = useState('');

    const form = document.getElementById('tent-upload');

    useEffect(() => {
        async function fetchProfileData() {

            try {
                const result = await axios.get(`http://localhost:8080/users/${username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
                console.log("userrr" + result.data.tent);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [token])

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile))
    }

    async function addTent(e) {
        e.preventDefault();

        let myTentId = '';
        try {
            const response = await axios.post('http://localhost:8080/tents', {
                title: title,
                description: tentDescription,
                pricePerNight: tentPricePerNight,
                maxNumberOfPersons: tentMaxNumberOfPersons,
                street: streetName,
                houseNumber: houseNumber,
                city: city,
                province: province,
                tentOptions: tentOptions
            });

            myTentId = response.data.id;
            console.log("addTent: " + response.data);
            toggleAddSucces(true);
        } catch (e) {
            console.error(e);
        }

        //image
        const formData = new FormData(form);
        formData.append("file", file);
        console.log([...formData])

        try {
            const url = "http://localhost:8080/tents/photo/" + myTentId;
            await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(() => {
                console.log("komtie hier????")
            });
        } catch (e) {
            console.error(e);
        }

        try {
            const endpoint = `http://localhost:8080/users/${username}/${myTentId}`;
            await axios.put(endpoint)

            setToggle(!toggle);
        } catch(e) {
            console.error(e);
        }

        try {
            const anotherUrl = `http://localhost:8080/tents/options/${myTentId}/2`;
            await axios.put(anotherUrl)
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <section className="center-page">
            <PageBanner
                    bannerImage={tent}
                    bannerTitle="Welkom! &nbsp;"
                    bannerNameOfUser={profileData.username}
                />

            <section className="center">
                <button onClick={() => setToggle(!toggle)} className="add-tent">Voeg een tent toe</button>
            </section>


            <section className="overview">
                <section className="user-profile">
                    <h2>hieronder een overzicht van al uw geplaatste tenten</h2>
                    {addSucces === true && <h3>Een nieuwe tent is toegevoegd!</h3>}
                    <section className="tents">
                            {profileData.tent && profileData.tent.map((banaan, index)=> {
                                return <Tile
                                    name={index}
                                    key={index}
                                    url={index}
                                    title={banaan.title}
                                    image={banaan.file && <img src={banaan.file.url} alt={banaan.file.fileName}/>}
                                    price={banaan.pricePerNight}
                                    city={banaan.city}
                                    province={banaan.province}
                                />
                            })}
                    </section>

                </section>

                {toggle && (
                    <form onSubmit={addTent} className="tent-form" id="tent-upload" >
                        <button className="x-toggle" onClick={() => setToggle(!toggle)}>X</button>

                        <label htmlFor="tent-name">Naam van accomodatie:</label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            name="tent-name"
                            id="tent-name"
                            value={title}
                        />

                        <label htmlFor="street-name">Straatnaam</label>
                        <input
                            onChange={(e) => setStreetName(e.target.value)}
                            type="text"
                            name="street-name"
                            id="street-name"
                            value={streetName}
                        />

                        <label htmlFor="house-number">Huisnummer</label>
                        <input
                            onChange={(e) => setHouseNumber(e.target.value)}
                            type="text"
                            name="house-numbere"
                            id="house-number"
                            value={houseNumber}
                        />

                        <label htmlFor="city">Woonplaats</label>
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            name="city"
                            id="city"
                            value={city}
                        />

                        <label htmlFor="province">Provincie:</label>
                        <select
                            onChange={(e) => setProvince(e.target.value)}
                            name="province"
                            id="province"
                            value={province}
                        >
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

                        <label htmlFor="message">Vertel wat over de accomodatie:</label>
                        <input
                            type="field"
                            name="message"
                            id="message"
                            value={tentDescription}
                            onChange={(e) => setTentDescription(e.target.value)}
                        />

                        <label htmlFor="photo">
                            Voeg een foto toe
                        <input type="file" name="photo" id="tent-image" accept="image/*" onChange={handleImageChange}/>
                            <img src={previewUrl} alt="" className="image-preview"/>
                        </label>

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

                    <p>Welke extra opties bied u aan?</p>
                        <label htmlFor="FietsVerhuur">Fiets verhuur</label>
                        <input type="checkbox" 
                               name="option" 
                               id="FietsVerhuur" 
                               value={tentOptions}
                               onChange={(e) => setTentOptions(e.target.value)}
                        />
                        <label htmlFor="Jacuzzi">Jacuzzi</label>
                        <input type="checkbox" 
                               name="option" 
                               id="Jacuzzi" 
                               value={tentOptions}
                               onChange={(e) => setTentOptions(e.target.value)}
                        />

                        <label htmlFor="BBQ Grill">BBQ Grill</label>
                        <input type="checkbox" 
                               name="option" 
                               id="BBQ Grill" 
                               value={tentOptions}
                               onChange={(e) => setTentOptions(e.target.value)}
                        />

                        <button type="submit">Verstuur</button>
                    </form>
                )}
            </section>

        </section>
    );
}

export default Profile;