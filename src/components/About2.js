import React, {Component} from 'react';

class About2 extends Component {
    render() {
        return (
            <div className={"about2"}>
                <div className={"text5"}>
                    <span className={"title5"}>Our Services</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</span>
                </div>
                <div className={"services"}>
                    <div className={"service"}>
                        <i className="fa fa-truck" aria-hidden="true" style={{transform:"scale(-1,1)"}}></i>
                        <span>Delivery Services</span>
                    </div>
                    <div className={"service"}>
                        <i className="fa fa-exchange" aria-hidden="true"></i>
                        <span>Shipping & Return</span>
                    </div>
                    <div className={"service"}>
                        <i class="fa fa-percent" aria-hidden="true"></i>
                        <span>Promotion</span>
                    </div>
                    <div className={"service"}>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <span>24 Hours Service</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default About2;