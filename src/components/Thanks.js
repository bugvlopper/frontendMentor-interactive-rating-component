import { Component } from "react";
import illustration from "../images/illustration-thank-you.svg";
import "../css/Thanks.css";

class Thanks extends Component {
    state = {  } 
    _rate(){
        if (this.props.rate === null) {
            return 0 
        }
        return this.props.rate
    }
    render() { 
        return (
            <div className="card">
                <img src={illustration} alt="Smartphone illustration" />
                <p className="rateResult">You selected {this._rate()} out of 5</p>
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating. If you ever need more support, 
                    don't hesitate to get in touch!
                </p>
            </div>
        );
    }
}
 
export default Thanks;