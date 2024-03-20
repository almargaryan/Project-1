import React, {Component} from 'react';
import {ReactComponent as LevisSvg} from "../assets/img/levis.svg";
import {ReactComponent as AdidasSvg} from "../assets/img/adidas.svg";
import {ReactComponent as NikeSvg} from "../assets/img/nike.svg";
import {ReactComponent as HMSvg} from "../assets/img/HM.svg";
import Carousel from "nuka-carousel";

class About3 extends Component {
    render() {
        return (
            <div className={"about3"}>
               <div className={"about3a"}>
                   <div className={"text6"}>
                       <div className={"title6"}>Our Brands</div>
                       <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</div>
                   </div>
               </div>
               <div className={"carousel6"}>
                   <Carousel wrapAround={true} autoplay={true} slidesToShow={4} slidesToScroll={4}>
                       <LevisSvg className={"logos"}/>
                       <AdidasSvg className={"logos"}/>
                       <NikeSvg className={"logos"}/>
                       <HMSvg className={"logos"}/>
                   </Carousel>
               </div>
            </div>
        );
    }
}

export default About3;