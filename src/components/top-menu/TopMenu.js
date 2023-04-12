import React from 'react';
import './TopMenu.css'
import {
    NavLink,
    useHistory
} from 'react-router-dom';
import {
    useContext
} from "react";
import {
    AuthContext
} from "../../context/AuthContext";

function TopMenu() {
    const history = useHistory();
    const { logout } = useContext(AuthContext);

    function handleClick() {
        history.push("/login");
    }


    return (
            <nav className="flex-horizontal">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/luxe-tenten" exact activeClassName="active-link">Wandelroutes & Unieke Activiteiten</NavLink>
                    </li>

                    <li>
                        <NavLink to="/profiel" exact activeClassName="active-link">Profiel</NavLink>
                    </li>
                </ul>
                <section className="vl"></section>
                <button
                    className={'button'}
                    type="button"
                    onClick={handleClick}
                >Inloggen</button>
                <h6 className="pointer" onClick={logout}>Uitloggen</h6>
            </nav>
    );
}

export default TopMenu;