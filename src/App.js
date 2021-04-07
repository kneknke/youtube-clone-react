import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    /* jshint ignore:start */
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
    /* jshint ignore:end */
  );
}

export default App;
