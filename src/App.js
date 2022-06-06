import React, {
} from "react";
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import LuxeTenten from "./pages/LuxeTenten";
import UserProfile from "./pages/UserProfile"
import {
  Switch,
  Route,
} from "react-router-dom";
import TopMenu
    from "./components/top-menu/TopMenu";

function App() {

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
                <Login />
            </Route>
            <Route exact path="/profiel">
                <UserProfile />
            </Route>
        </Switch>
      </>
  );
}



export default App;
