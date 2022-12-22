import React, {
    useContext
} from "react";
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import LuxeTenten from "./pages/LuxeTenten";
import Profile from "./pages/Profile"
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import TopMenu from "./components/top-menu/TopMenu";
import SingleTent from "./pages/SingleTent";
import {
    AuthContext
} from "./context/AuthContext";

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
      <>
        <TopMenu />

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/luxe-tenten">
                <LuxeTenten />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route exact path="/profiel">
                {isAuth ? <Profile /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/accomodatie">
                <SingleTent/>
            </Route>
            <Route path="/registreren">
                <Register />
            </Route>
        </Switch>
      </>
  );
}



export default App;
