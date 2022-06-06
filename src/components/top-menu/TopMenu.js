import React from 'react';
import './TopMenu.css'
import {
    NavLink,
    useHistory
} from 'react-router-dom';
import Button
    from "../button/Button";

function TopMenu() {

    const history = useHistory();

    function handleClick() {
        history.push("/login-pagina")
    }

    return (
            <nav className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/luxe-tenten" exact activeClassName="active-link">Luxe Tenten</NavLink>
                    </li>

                    <li>
                        <NavLink to="/over" exact activeClassName="active-link">Over</NavLink>
                    </li>
                </ul>
                <div className="vl"></div>
                <Button
                    title="Inloggen"
                />
            </nav>
    );
}

export default TopMenu;