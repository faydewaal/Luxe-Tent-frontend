import React from 'react';
import './Login.css'
import nature from '../assets/nature.png'
import {
    useHistory
} from "react-router-dom";




function Login () {
    const history = useHistory();

    function handleClick() {
        history.push("/profiel");
    }

    return (
        <section className="login">
            <div className="left-div">
                <div className="login-form">
                    <label htmlFor="text">E-mail</label>
                    <input
                        type="text"
                        id="e-mail"
                    />
                    <label htmlFor="text">Wachtwoord</label>
                    <input
                        type="text"
                        id="Wachtwoord"
                    />
                    <a href="#"><h6>regristreren</h6></a>
                    <button
                        className={'button'}
                        type="submit"
                        onClick={handleClick}
                    >
                        inloggen
                    </button>
                </div>
            </div>
            <div className="right-div">
                <img className="nature" src={nature} alt=""/>
            </div>
        </section>
    )
}

export default Login;