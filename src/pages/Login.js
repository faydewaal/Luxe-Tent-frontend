import React, {
    useContext,
    useState
} from 'react';
import './Login.css'
import nature from '../assets/nature.png'
import ButtonGrey
    from "../components/ButtonGrey/ButtonGrey";
import {
    Link
} from "react-router-dom";
import {
    AuthContext
} from "../context/AuthContext";
import axios
    from "axios";


function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function userLogin(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password,
            });
            console.log("response: " + response.data.jwt);
            login(response.data.jwt)

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


    return (
        <section className="login">
            <section className="left-div">
                <form className="login-form" onSubmit={userLogin}>
                    <label htmlFor="username">Gebruikersnaam</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password-field">Wachtwoord</label>
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ButtonGrey
                        btnName="inloggen"
                    />
                    <Link to="registreren"><h5>Registreren</h5></Link>
                    {error && <p className="error">Combinatie van gebruikersnaam en wachtwoord is onjuist</p>}
                </form>
            </section>
            <aside className="right-div">
                <img className="nature" src={nature} alt=""/>
            </aside>
        </section>
    )
}

export default Login;