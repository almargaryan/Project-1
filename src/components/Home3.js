import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home3 extends Component {
    render() {
        return (
            <div className={"home3"}>
                <div className={"text3"}>
                    <span className={"title3"}>Featured Product</span>
                    <span>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</span>
                </div>
                <div className={"categories3"}>
                    <div className={"category3"}>
                        <Link to={"/shop"} className={"img3a"}></Link>
                        <div className={"border"}>
                            <div className={"rating3"}>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span className={"rate"}>$240.00</span>
                            </div>
                            <span className={"title3a"}>Gym Weight</span>
                            <br/>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</span>
                            <br/>
                            <span className={"review3"}>Reviews (24)</span>
                        </div>
                    </div>
                    <div className={"category3"}>
                        <Link to={"/shop"} className={"img3b"}></Link>
                        <div className={"border"}>
                            <div className={"rating3"}>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span className={"rate"}>$480.00</span>
                            </div>
                            <span className={"title3a"}>Cloud Nike Shoes</span>
                            <br/>
                            <span>Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.</span>
                            <br/>
                            <span className={"review3"}>Reviews (48)</span>
                        </div>
                    </div>
                    <div className={"category3"}>
                        <Link to={"/shop"} className={"img3c"}></Link>
                        <div className={"border"}>
                            <div className={"rating3"}>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i></span>
                                <span className={"rate"}>$360.00</span>
                            </div>
                            <span className={"title3a"}>Summer Addides Shoes</span>
                            <br/>
                            <span>Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</span>
                            <br/>
                            <span className={"review3"}>Reviews (74)</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home3;