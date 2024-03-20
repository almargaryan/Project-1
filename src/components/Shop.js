import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Shop1 from "./Shop1";
import About3 from "./About3";

class Shop extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Shop1/>
                <About3/>
                <Footer/>
            </div>
        );
    }
}

export default Shop;