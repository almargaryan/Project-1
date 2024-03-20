import React, {Component} from 'react';
import Carousel from "nuka-carousel";
import {Link} from "react-router-dom";

class Home1 extends Component {
    render() {
        return (
            <div>
                <Carousel wrapAround={true} autoplay={true}>
                    <div className={"carousel1"}>
                        <div className={"text1"}>
                            <span className={"title1"}>Zay eCommerce</span>
                            <span className={"small"}>Tiny and Perfect eCommerce Template</span>
                            <span>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by <Link to={"https://templatemo.com/"} target={"_blank"} id={"text1"}>TemplateMo</Link> website. Image credits go to <Link to={"https://storyset.com/"} target={"_blank"} id={"text1"}>Freepik Stories</Link>, <Link to={"https://unsplash.com/"} target={"_blank"} id={"text1"}>Unsplash</Link> and <Link to={"https://icons8.com/"} target={"_blank"} id={"text1"}>Icons 8</Link>.</span>
                        </div>
                        <div className={"img1a"}></div>
                    </div>
                    <div className={"carousel1"}>
                        <div className={"text1"}>
                            <span className={"title1"}>Proident occaecat</span>
                            <span className={"small"}>Aliquip ex ea commodo consequat</span>
                            <span>You are permitted to use this Zay CSS template for your commercial websites. You are <b>not permitted</b> to re-distribute the template ZIP file in any kind of template collection websites.</span>
                        </div>
                        <div className={"img1b"}></div>
                    </div>
                    <div className={"carousel1"}>
                        <div className={"text1"}>
                            <span className={"title1"}>Repr in voluptate</span>
                            <span className={"small"}>Ullamco laboris nisi ut</span>
                            <span>We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</span>
                        </div>
                        <div className={"img1c"}></div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Home1;