import React, {
    useState
} from 'react';
import './Login.css'
import nature from '../assets/nature.png'
import {
    Link,
    useHistory
} from "react-router-dom";
import axios
    from "axios";

function Register () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enabled, SetEnabled] = useState(true);
    const [apikey, SetApikey] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();

    async function register(e) {
    
        try {
            await axios.post('http://localhost:8080/users', {
                username: username,
                password: password,
                email: email,
                enabled: enabled,
                apikey: apikey
            });


            history.push('/login');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <section className="login">
            <section className="left-div">
                <form onSubmit={register} className="login-form">
                    <label htmlFor="usernaam">Gebruikersnaam</label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        id="usernaam"
                    />
                    <label htmlFor="e-mail">E-mail</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        id="e-mail"
                    />
                    <label htmlFor="wachtwoord">Wachtwoord</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="Wachtwoord"
                    />
                    {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                    <button
                        className={'button'}
                        type="submit"
                    >
                        registreren
                    </button>
                    <Link to="login-pagina"><h5>Inloggen</h5></Link>
                </form>
            </section>
            <aside className="right-div">
                <img className="nature" src={nature} alt=""/>
            </aside>
        </section>
    )
}

export default Register;