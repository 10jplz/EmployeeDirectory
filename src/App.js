import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route  path="/" component={props => <Welcome {...props} />} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
