import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <div className={"names"}>
                    <span style={{color:"#59AB6E"}}>Zay Shop</span>
                    <span>Products</span>
                    <span>Further Info</span>
                </div>
                <div className={"pages"}>
                    <div className={"zayShop"}>
                        <span><i className="fa fa-map-marker" aria-hidden="true"></i> 123 Consectetur at ligula 10660</span>
                        <span id={"links"}><i className="fa fa-envelope" aria-hidden="true"></i>  info@company.com</span>
                        <span id={"links"}><i className="fa fa-phone" aria-hidden="true"></i> 010-020-0340</span>
                    </div>
                    <div className={"products"}>
                        <Link to={"/shop"} id={"links"}>Luxury</Link>
                        <Link to={"/shop"} id={"links"}>Sport Wear</Link>
                        <Link to={"/shop"} id={"links"}>Men's Shoes</Link>
                        <Link to={"/shop"} id={"links"}>Women's Shoes</Link>
                        <Link to={"/shop"} id={"links"}>Popular Dress</Link>
                        <Link to={"/shop"} id={"links"}>Gym Accessories</Link>
                        <Link to={"/shop"} id={"links"}>Sport Shoes</Link>
                    </div>
                    <div className={"furtherInfo"}>
                        <Link to={"/"} id={"links"}>Home</Link>
                        <Link to={"/about"} id={"links"}>About US</Link>
                        <Link to={"/contact"} id={"links"}>Shop Locations</Link>
                        <Link to={"/contact"} id={"links"}>FAQs</Link>
                        <Link to={"/contact"} id={"links"}>Contact</Link>
                    </div>
                </div>
                <div className={"icons"}>
                    <div className={"sites"}>
                        <Link to={"https://www.facebook.com/templatemo"} id={"sites"} target={"_blank"}><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                        <Link to={"https://www.instagram.com/"} id={"sites"} target={"_blank"}><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                        <Link to={"https://twitter.com/"} id={"sites"} target={"_blank"}><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                        <Link to={"https://www.linkedin.com/feed/"} id={"sites"} target={"_blank"}><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                    </div>
                    <form>
                        <input type={"email"} placeholder={"Email address"}/>
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className={"end"}>
                    <span>Copyright © 2021 Company Name | Designed by <Link to={"https://templatemo.com/"} id={"links"}> TemplateMo </Link></span>
                </div>
            </div>
        );
    }
}

export default Footer;