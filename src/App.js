import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";


console.log(API);

function App() {
  return (
    <Router>
      <div>
        <Header>
          {/* <Wrapper>
            <Route path="/" component= {Welcome} />
          </Wrapper> */}
        </Header>
      </div>
    </Router>
  );
}

export default App;