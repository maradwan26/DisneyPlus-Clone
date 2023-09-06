import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { Fragment } from "react";
import Originals from "./components/Originals";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/detail/:id/" element={<Detail />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
