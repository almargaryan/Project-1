import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <About1/>
                <About2/>
                <About3/>
                <Footer/>
            </div>
        );
    }
}

export default About;