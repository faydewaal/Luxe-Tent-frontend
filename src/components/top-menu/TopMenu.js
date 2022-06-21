import React from 'react';
import './TopMenu.css'
import {
    NavLink,
    useHistory
} from 'react-router-dom';

function TopMenu() {
    const history = useHistory();

    function handleClick() {
        history.push("/login-pagina");
    }


    return (
            <nav className="flex-horizontal">
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
                <button
                    className={'button'}
                    type="button"
                    onClick={handleClick}
                >Inloggen</button>
            </nav>
    );
}

export default TopMenu;