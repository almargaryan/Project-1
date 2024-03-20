import React, {Component} from 'react';
import LinksPage from "./LinksPage";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <div className={"header"}>
                    <div className={"info"}>
                        <span><i className="fa fa-envelope" aria-hidden="true"></i>  info@company.com</span>
                        <span><i className="fa fa-phone" aria-hidden="true"></i> 010-020-0340</span>
                    </div>
                    <div className={"space"}></div>
                    <div className={"links"}>
                        <Link to={"https://www.facebook.com/templatemo"} target={"_blank"}><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                        <Link to={"https://www.instagram.com/"} target={"_blank"}><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                        <Link to={"https://twitter.com/"} target={"_blank"}><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                        <Link to={"https://www.linkedin.com/feed/"} target={"_blank"}><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <LinksPage/>
            </div>
        );
    }
}

export default Header;