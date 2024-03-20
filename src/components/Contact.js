import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Contact1 from "./Contact1";
import Contact3 from "./Contact3";
import Contact2 from "./Contact2";

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Contact1/>
                <Contact2/>
                <Contact3/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;