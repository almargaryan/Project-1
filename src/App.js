import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

class App extends Component {
    render() {
        return (
            <div>
              <BrowserRouter>
                  <Routes>
                      <Route path={'/'} element={<Home/>}/>
                      <Route path={'/about'} element={<About/>}/>
                      <Route path={'/shop'} element={<Shop/>}/>
                      <Route path={'/contact'} element={<Contact/>}/>
                  </Routes>
              </BrowserRouter>
            </div>
        );
    }
}

export default App;