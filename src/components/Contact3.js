import React, {Component} from 'react';

class Contact3 extends Component {
    render() {
        return (
            <div className={"contact3"}>
                <div className={"inp9"}>
                    <form>
                        <label>
                            Name
                            <input type={"text"} placeholder={"Name"} style={{width:"400px", height:"35px", fontSize:"20px"}}/>
                        </label>
                        <label>
                            Email
                            <input type={"email"} placeholder={"Email"} style={{width:"400px", height:"35px", fontSize:"20px"}}/>
                        </label>
                    </form>
                    <label>
                        Subject
                        <input type={"text"} placeholder={"Subject"} style={{width:"837px", height:"35px", fontSize:"20px"}}/>
                    </label>
                    <label>
                        Message
                        <textarea placeholder={"Message"} style={{width:"837px", height:"200px", fontSize:"20px"}}></textarea>
                    </label>
                    <button className={"but9"}>Let's Talk</button>
                </div>
            </div>
        );
    }
}

export default Contact3;