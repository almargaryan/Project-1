import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LinksPage extends Component {
    render() {
        return (
            <div className={"menu"}>
                <Link to={'/'} style={{textDecoration:"none", fontSize:"50px", color:"#59AB6E"}}>Zay</Link>
                <div className={"options"}>
                    <Link to={'/'} className={"link"}>Home</Link>
                    <Link to={'/about'} className={"link"}>About</Link>
                    <Link to={'/shop'} className={"link"}>Shop</Link>
                    <Link to={'/contact'} className={"link"}>Contact</Link>
                </div>
                <div className={"search"}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}

export default LinksPage;