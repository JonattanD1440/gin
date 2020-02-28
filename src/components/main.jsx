import React, { Component } from "react";
import Homepage from "./home";
import { Switch, Route, NavLink } from "react-router-dom";
import Dine from "./dine";
import LoadingBar from "react-top-loading-bar";
import Events from "./events";
import NavBar from "./navbar";
import Discover from "./discover";

class Main extends Component {
  state = {
    navigatedPages: []
  };

  render() {
    const navMenu = () => {
      setTimeout(() => {
        const navigatedPages = [...this.state.navigatedPages];
        const currentPage = window.location.pathname;

        if (navigatedPages.includes(currentPage)) return;
        navigatedPages.push(currentPage);

        this.LoadingBar.complete();

        this.setState({ navigatedPages });
      }, 100);
      console.log(this.state.navigatedPages);
    };
    navMenu();

    return (
      <React.Fragment>
        <NavBar />
        <LoadingBar
          className="loadingbar"
          height={3}
          color="#4d4d4d"
          onRef={ref => (this.LoadingBar = ref)}
        />

        <div className="main">
          <Switch>
            <Route path="/dine" component={Dine} />
            <Route path="/discover" component={Discover} />
            <Route path="/events" component={Events} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
