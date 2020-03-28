import React from 'react'
import Card from 'react-credit-cards';
import {

    Redirect, withRouter
} from "react-router-dom";

import Navbar from './Navbar';

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData,
} from '../styles/utils';
import styles from '../styles/Payment.css';

import 'react-credit-cards/es/styles-compiled.css';

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
            redirectToOrderConfirmation: false,
            userIdLoggedIn: '',
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: '',
            redirectToLogin: false,
            checkInDateToPayment: '',
            checkOutDateToPayment: '',
            reservationID: '',
            selectedRoomID: '',
            reservationsArray: []
        };

        console.log('RESERVED ROOM CLICKED DATA FROM LISTIFY.JS');

    }


    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === 'expiry') {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === 'cvc') {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    render() {

        const { name, number, expiry, cvc, focused } = this.state;


        if (this.state.redirectToOrderConfirmation && this.state.userIdLoggedIn) {
            return <Redirect
                to={{
                    pathname: "/orderconfirmation",
                    data: { roomreserve: this.state.roomreserve }
                }}
            />
        }

        else if (this.state.redirectToLogin) {
            return <Redirect
                to={{
                    pathname: "/login",
                }}
            />
        }

        return (
            <div>
                <Navbar />
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
                    <div className="paymentSectionDiv">
                        <div key="Payment">
                            <div className="App-payment">
                                <h1>Payment By Credit Card</h1>
                                <h1>We currently support VISA, Master, Diner's Club Intl, and American Express</h1>
                                <Card
                                    number={number}
                                    name={name}
                                    expiry={expiry}
                                    cvc={cvc}
                                    focused={focused}
                                />
                                <form className="Paymentform" ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="number"
                                            className="form-control"
                                            placeholder="Card Number"
                                            pattern="[\d| ]{16,22}"
                                            required
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                        <small>E.g.: 49..., 51..., 36..., 37...</small>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Card Holder Name"
                                            required
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <input
                                                type="tel"
                                                name="expiry"
                                                className="form-control"
                                                placeholder="Valid Thru"
                                                pattern="\d\d/\d\d"
                                                required
                                                onChange={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                            />
                                            <small>Expiry Date: MM/YY</small>
                                        </div>
                                        <div className="col-6">
                                            <input
                                                type="tel"
                                                name="cvc"
                                                className="form-control"
                                                placeholder="CVC"
                                                pattern="\d{3,4}"
                                                required
                                                onChange={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                            />
                                            <small>3 or 4 digit CVC number located back of your card.</small>
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button className="btn btn-primary btn-block" onClick={this.submitPressed}>PAY</button>
                                    </div>
                                </form>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setState({ roomreserve: this.props.location.data.roomreserve });
        this.setState({ reservedBedDetails: this.props.location.data.roomreserve.bedDetails })
        this.setState({ reservedRoomType: this.props.location.data.roomreserve.roomType })
        this.setState({ reservedRoomPrice: this.props.location.data.roomreserve.price })
        this.setState({ reservedRoomNumberOfGuests: this.props.location.data.roomreserve.numOfGuests })

        console.log("Payment.js " + this.props.location.data.userIdLoggedIn);
        this.setState({ userIdLoggedIn: this.props.location.data.userIdLoggedIn });

        this.setState({ checkInDateToPayment: this.props.location.data.checkInDateToPayment });
        this.setState({ checkOutDateToPayment: this.props.location.data.checkOutDateToPayment });
        this.setState({ selectedRoomID: this.props.location.data.roomreserve._id });
        this.setState({ reservationsArray: this.props.location.data.roomreserve.reservations });

    }

    submitPressed = () => {

        console.log(this.state);

        if (this.state.userIdLoggedIn == "") {


        }

        // No Login but form empty


        // No Login but complete form
        if (this.state.userIdLoggedIn == "") {
            alert("You need to login first!");
            this.setState({ redirectToLogin: true });
        } else if (this.state.userIdLoggedIn) {

            if (this.state.number === "" && this.state.name === "" && this.state.expiry === "" && this.state.cvc === "") {

                alert("Please complete the Payment form");
                this.form.reset();

            }

            else {
                this.setState({ redirectToOrderConfirmation: true });

                // Simple POST request with a JSON body using fetch
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ checkInDate: this.state.checkInDateToPayment, checkOutDate: this.state.checkOutDateToPayment, userID: this.state.userIdLoggedIn })
                };
                fetch('http://localhost:5000/reservations/', requestOptions)
                    .then(response => response.json())
                    .then(data => {

                        console.log("DATA in LINE 246: ")
                        console.log(data)

                        let reservationsArray = this.state.reservationsArray.slice();

                        console.log("RES ARRAY BEFORE PUSH LINE 251: ")
                        console.log(reservationsArray)

                        reservationsArray.push(data)

                        console.log("RES ARRAY AFTER PUSH LINE 256: ")
                        console.log(reservationsArray)


                        const patchOptions = {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ reservations: reservationsArray })
                        };
                        fetch('http://localhost:5000/rooms/' + this.state.selectedRoomID, patchOptions)
                            .then(response => response.json())
                            .then(data => { console.log(data) });





                    });

                // Post reservation id to ROOMS BY ROOMS ID
            }
        }

        else {
            this.setState({ redirectToOrderConfirmation: true });

            // Simple POST request with a JSON body using fetch
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ checkInDate: this.state.checkInDateToPayment, checkOutDate: this.state.checkOutDateToPayment, userID: this.state.userIdLoggedIn })
            };
            fetch('http://localhost:5000/reservations/', requestOptions)
                .then(response => response.json())
                .then(data => console.log("RESERVATION ID: " + data));

            // Post reservation id to ROOMS BY ROOMS ID
        }


    }
}

export default withRouter(Payments);