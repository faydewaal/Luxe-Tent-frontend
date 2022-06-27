import React, {
    useContext
} from 'react';
import './LogIn.css'
import nature from '../assets/nature.png'
import {
    Link,
    useHistory
} from "react-router-dom";
import {
    AuthContext
} from "../context/AuthContext";



function LogIn () {
    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    const history = useHistory();

    function handleClick() {
        history.push("/profiel");
    }

    return (
        <section className="login">
            <div className="left-div">
                <form className="login-form">
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
                    <button
                        className={'button'}
                        type="submit"
                        onClick={handleSubmit || handleClick}
                    >
                        inloggen
                    </button>
                    <Link to="regristreren"><h5>Regristreren</h5></Link>
                </form>
            </div>
            <div className="right-div">
                <img className="nature" src={nature} alt=""/>
            </div>
        </section>
    )
}

export default LogIn;