import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Shop1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            show1:false,
            show2:false,
            show3:false
        }
    }
    handleShow1=()=>{
        this.setState({show1:!this.state.show1})
        this.setState({show2:false})
        this.setState({show3:false})


    }
    handleShow2=()=>{
        this.setState({show2:!this.state.show2})
        this.setState({show1:false})
        this.setState({show3:false})

    }
    handleShow3=()=>{
        this.setState({show3:!this.state.show3})
        this.setState({show1:false})
        this.setState({show2:false})
    }

    render() {
        return (
            <div className={"shop1"}>
                <div style={{width:"20%", height:"95%", display:"flex", alignItems:"flex-start"}}>
                    <div className={"menu7"}>
                        <span className={"title7"}>Categories</span>
                        <button onClick={this.handleShow1}>Gender <i className="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                        {this.state.show1?<div className={"show"}>
                            <Link to={'/shop'} className={"link"}><span>Men</span></Link>
                            <Link to={'/shop'} className={"link"}><span>Women</span></Link>
                        </div>:null}
                        <button onClick={this.handleShow2}>Sale <i className="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                        {this.state.show2?<div className={"show"}>
                            <Link to={'/shop'} className={"link"}><span>Sport</span></Link>
                            <Link to={'/shop'} className={"link"}><span>Luxury</span></Link>
                        </div>:null}
                        <button onClick={this.handleShow3}>Product <i className="fa fa-arrow-circle-down" aria-hidden="true"></i></button>
                        {this.state.show3?<div className={"show"}>
                            <Link to={'/shop'} className={"link"}><span>Bag</span></Link>
                            <Link to={'/shop'} className={"link"}><span>Sweather</span></Link>
                            <Link to={'/shop'} className={"link"}><span>Sunglass</span></Link>
                        </div>:null}
                    </div>
                </div>
                <div className={"products7"}>
                    <div className={"selection7"}>
                        <div className={"options7"}>
                            <Link to={'/shop'} className={"link"}>All</Link>
                            <Link to={'/shop'} className={"link"}>Men</Link>
                            <Link to={'/shop'} className={"link"}>Women</Link>
                        </div>
                        <div>
                            <select className={"select7"}>
                                <option>Featured</option>
                                <option>A to Z</option>
                                <option>Item</option>
                            </select>
                        </div>
                    </div>
                    <div className={"photos7"}>
                        <div className={"pics7"}>
                            <div className={"info7"}>
                                <div className={"img7a"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                            <div className={"info7"}>
                                <div className={"img7b"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                            <div className={"info7"}>
                                <div className={"img7c"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                        </div>
                        <div className={"pics7"}>
                            <div className={"info7"}>
                                <div className={"img7d"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                            <div className={"info7"}>
                                <div className={"img7e"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                            <div className={"info7"}>
                                <div className={"img7f"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                        </div>
                        <div className={"pics7"}>
                            <div className={"info7"}>
                                <div className={"img7g"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                            <div className={"info7"}>
                                <div className={"img7h"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                            <div className={"info7"}>
                                <div className={"img7i"}>
                                    <div className={"fon7"}>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-eye" aria-hidden="true"></i></span>
                                        <span><i className="fa fa-cart-plus" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <span>Oupidatat non</span>
                                <span>M/L/X/XL</span>
                                <span><i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true" style={{color:"#EDE861"}}></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></span>
                                <span>$250.00</span>
                            </div>
                        </div>
                    </div>
                    <div className={"buts7"}>
                        <Link to={'/shop'}><button id={"page1"}>1</button></Link>
                        <Link to={'/shop'}><button className={"page2"}>2</button></Link>
                        <Link to={'/shop'}><button className={"page3"}>3</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop1;