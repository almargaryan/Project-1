import React, {Component} from 'react';

class Home2 extends Component {
    render() {
        return (
            <div className={"home2"}>
                <div className={"text2"}>
                    <span className={"title2"}>Categories of The Month</span>
                    <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div className={"categories2"}>
                    <div className={"category2"}>
                        <div className={"img2a"}></div>
                        <span>Watches</span>
                        <button>Go Shop</button>
                    </div>
                    <div className={"category2"}>
                        <div className={"img2b"}></div>
                        <span>Shoes</span>
                        <button>Go Shop</button>
                    </div>
                    <div className={"category2"}>
                        <div className={"img2c"}></div>
                        <span>Accessories</span>
                        <button>Go Shop</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home2;