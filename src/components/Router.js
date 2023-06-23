import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from "../routes/Atuh";
import Home from "routes/Home";
import Navigation from "./Navigation";
import Profile from "routes/Profile";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
                {isLoggedIn ? (
                        <>
                            <Route exact path='/'>
                            </Route>
                        </>
                    ) : (
                        <Route exact path='/'>
                            <Auth />
                        </Route>)
                }
        </Router>
    )
}
 
export default AppRouter;