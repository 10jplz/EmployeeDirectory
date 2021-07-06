import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";




function App() {
  return (
    <Router>
      <div>
        <Header>
          <Wrapper>
          <Route  path="/" component={props => <Welcome {...props} />} />
          </Wrapper>
        </Header>
      </div>
    </Router>
  );
}

export default App;