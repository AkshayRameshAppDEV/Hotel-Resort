import React from 'react';
import '../styles/CheckAvailabilityNavbar.css';

import {
    Link, Redirect
} from "react-router-dom";

// This is the bootstrap navbar component which is used in App.js

class CheckAvailabilityNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };

        this.submitPressed = this.submitPressed.bind(this);
    }

    submitPressed = event => {

        this.setState({ redirect: true })

    }

    render() {
        if (this.state.redirect) {

            return (<Redirect to="/roomlist" />);
        }
        return (
            <nav class="navbar sticky-top bg-warning">
                <div class="navbar-brand">Booking Your Hotel</div>
                <form class="form-inline" onSubmit={this.submitPressed}>
                    <label for="checkIn">Check In:</label>
                    <input class="form-control" type="date" id="checkIn" name="checkIn" />
                    <label for="checkOut">Check Out:</label>
                    <input class="form-control" type="date" id="checkOut" name="checkOut" />

                    <label for="guests">Guests:</label>
                    <select class="form-control" id="guests">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                    <label for="rooms">Room:</label>
                    <select class="form-control" id="rooms">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <input class="submitButtonColor" type="submit" value="CHECK AVAILABILITY" />
                </form>

            </nav>

        );
    }
}

export default CheckAvailabilityNavbar;