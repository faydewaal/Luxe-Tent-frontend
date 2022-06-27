import React, {
    useContext
} from "react";
import './App.css';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LuxeTenten from "./pages/LuxeTenten";
import UserProfile from "./pages/UserProfile"
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import TopMenu from "./components/top-menu/TopMenu";
import SingleTent from "./pages/SingleTent";
import { SliderData } from "./pages/SliderData";
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
            <Route path="/login-pagina">
                <LogIn />
            </Route>
            <Route exact path="/profiel">
                {isAuth ? <UserProfile /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/accomodatie">
                <SingleTent slides={SliderData} />
            </Route>
            <Route path="/regristreren">
                <SignUp />
            </Route>
        </Switch>
      </>
  );
}



export default App;
