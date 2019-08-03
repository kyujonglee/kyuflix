import React from "react";
import {HashRouter as Router, Route} from "react-router-dom"
import Home from "../Routes/Home";
import Tv from "../Routes/Tv";
import Search from "../Routes/Search";


export default () => (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/tv" component={Tv} />
        <Route exact path="/search" component={Search} />
    </Router>
)