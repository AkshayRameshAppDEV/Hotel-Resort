import React from 'react'
import {

    Redirect, withRouter
} from "react-router-dom";

class Payments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roomreserve: [],
            reservedBedDetails: [],
            reservedRoomType: "",
            reservedRoomPrice: 0,
            reservedRoomNumberOfGuests: 0,
            fname: '',
            lname: '',
            email: '',
            phone: '',
            cardnumber: '',
            expirationdate: '',
            redirectToOrderConfirmation: false
        };

        console.log('RESERVED ROOM CLICKED DATA FROM LISTIFY.JS');

        this.submitPressed = this.submitPressed.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {

        if (this.state.redirectToOrderConfirmation) {
            return <Redirect
                to={{
                    pathname: "/orderconfirmation",
                    data: { roomreserve: this.state.roomreserve }
                }}
            />
        }

        return (
            <div id="paymentsPageDiv">
                <div id="reservedRoomInfoDiv">
                    <h1>Welcome to Payments Page</h1>
                    <h2> Your Reserved Room Information </h2>
                    <hr />
                    <h4> Bed Details: {this.state.reservedBedDetails} </h4>
                    <h4> Room Type: {this.state.reservedRoomType} </h4>
                    <h4> Room Price: ${this.state.reservedRoomPrice} </h4>
                    <h4> Number of Guests: {this.state.reservedRoomNumberOfGuests} </h4>

                </div>
                <hr />
                <div id="paymentSectionDiv">
                    <h1>PAYMENT SECTION DIV</h1>




                    <div className="center-screen loginDivBody">
                        <div className="auth-wrapper">
                            <div className="auth-inner">
                                <h3>Checkout</h3>
                                {/**
                                 * Adding id to identify email, password because
                                 * this.handleChange event takes only original type such as
                                 * text,email, password. Since username, first and last name
                                 * are of type text, then event.target.id = text, which will 
                                 * create unecessary issues in the variable names. After setting id,
                                 * event.target.id = id
                                 * FAIL SAFE METHOD
                                 */}

                                <div className="form-group">
                                    <label>First Name</label>
                                    <input id="fname" type="text" className="form-control" placeholder="First Name" onChange={this.handleChange} />
                                    {/* <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.passwordError}
                                        </div> */}
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input id="lname" type="text" className="form-control" placeholder="Last Name" onChange={this.handleChange} />
                                    {/* <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.passwordError}
                                        </div> */}
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input id="email" type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                                    {/* <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.emailError}
                                        </div> */}
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input id="phone" type="tel" className="form-control" placeholder="Phone Number" onChange={this.handleChange} />
                                    {/* <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.passwordError}
                                        </div> */}
                                </div>

                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input id="cardnumber" type="text" className="form-control" placeholder="Enter Card Number" onChange={this.handleChange} />
                                    {/* <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.passwordError}
                                        </div> */}
                                </div>

                                <div className="form-group">
                                    <label>Expiration Date</label>
                                    <input id="expirationdate" type="text" className="form-control" placeholder="Enter expiration date" onChange={this.handleChange} />
                                    {/* <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.passwordError}
                                        </div> */}
                                </div>

                                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitPressed}>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setState({roomreserve: this.props.location.data.roomreserve});
        this.setState({ reservedBedDetails: this.props.location.data.roomreserve.bedDetails })
        this.setState({ reservedRoomType: this.props.location.data.roomreserve.roomType })
        this.setState({ reservedRoomPrice: this.props.location.data.roomreserve.price })
        this.setState({ reservedRoomNumberOfGuests: this.props.location.data.roomreserve.numOfGuests })

    }

    // as the user types first name, last name, username, email and passwod, keep updating state
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    submitPressed = () => {

        console.log(this.state);
        this.setState({redirectToOrderConfirmation: true});
    }
}

export default withRouter(Payments);