import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home1/>
                <Home2/>
                <Home3/>
                <Footer/>
            </div>
        );
    }
}

export default Home;