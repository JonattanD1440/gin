import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route, NavLink } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import NavBar from "./components/navbar";

import Dine from "./components/dine";
import Events from "./components/events";
import Homepage from "./components/home";
import Discover from "./components/discover";
import Footer from "./components/footer";
import Rooms from "./components/rooms";
import Book from "./components/book";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/dine" component={Dine} />
        <Route path="/discover" component={Discover} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/book" component={Book} />
        <Route path="/events" component={Events} />
        <Route path="/" component={Homepage} exact />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
