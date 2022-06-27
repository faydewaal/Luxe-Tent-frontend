import React, {
    useState
} from 'react';
import './LogIn.css'
import nature from '../assets/nature.png'
import {
    Link
} from "react-router-dom";
import axios
    from "axios";


function SignUp () {
    const [appUserName, setAppUserName] = useState('');
    const [appUserEmail, setAppUserEmail] = useState('');
    const [appUserPhoneNumber, setAppUserPhoneNumber] = useState('');
    const [appUserPassword, setAppUserPassword] = useState('');
    const [addSucces, toggleAddSucces] = useState(false);

    async function addAppUser(e) {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:8080/app-users', {
                name: appUserName,
                email: appUserEmail,
                phoneNumber: appUserPhoneNumber,
                password: appUserPassword

            });

            console.log(response.data);
            toggleAddSucces(true);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <section className="login">
            <div className="left-div">
                <form onSubmit={addAppUser} className="login-form">
                    <label htmlFor="naam">Volledige Naam</label>
                    <input
                        onChange={(e) => setAppUserName(e.target.value)}
                        type="text"
                        id="naam"
                    />
                    <label htmlFor="e-mail">E-mail</label>
                    <input
                        onChange={(e) => setAppUserEmail(e.target.value)}
                        type="text"
                        id="e-mail"
                    />
                    <label htmlFor="nummer">Telefoon Nummer</label>
                    <input
                        onChange={(e) => setAppUserPhoneNumber(e.target.value)}
                        type="text"
                        id="nummer"
                    />
                    <label htmlFor="wachtwoord">Wachtwoord</label>
                    <input
                        onChange={(e) => setAppUserPassword(e.target.value)}
                        type="text"
                        id="Wachtwoord"
                    />
                    <button
                        className={'button'}
                        type="submit"
                    >
                        regristreren
                    </button>
                    {addSucces === true && <h4>U ben succesvol geregristreerd!</h4>}
                    <Link to="login-pagina"><h5>Inloggen</h5></Link>
                </form>
            </div>
            <div className="right-div">
                <img className="nature" src={nature} alt=""/>
            </div>
        </section>
    )
}

export default SignUp;