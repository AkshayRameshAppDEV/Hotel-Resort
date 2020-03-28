import React from 'react';
import { Spinner, ListGroup } from 'react-bootstrap';
import '../styles/RoomList.css';

import {
    withRouter
} from "react-router-dom";

import Listify from '../components/Listify';

class RoomList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rooms: [],
            showData: false,
            userIdLoggedIn: '',
            checkInDateToPayment: '',
            checkOutDateToPayment: ''
        }

        console.log('location')
        console.log(this.props.location);
    }

    render() {
        if (this.state.loading) {
            return (
                <div id="roomlistSpinner">
                    <Spinner animation="grow" />
                </div>
            )
        } else {
            if (this.state.showData) {

                return (
                    <div className="roomsAvailable">
                        <Listify rooms={this.state.rooms} userIdLoggedIn={this.state.userIdLoggedIn} checkInDateToPayment={this.state.checkInDateToPayment} checkOutDateToPayment={this.state.checkOutDateToPayment}/>
                    </div>
                )

            }

            else {

                return (
                    <div className="noRoomsAvailable">
                        <h1>No Rooms Available currently at Hotel Resort. Please come back later.</h1>
                    </div>
                )

            }

        }
    }

    componentDidMount() {
        // do api call


        console.log("RoomList.js "+this.props.location.data.userIdLoggedIn);
        this.setState({ userIdLoggedIn: this.props.location.data.userIdLoggedIn});
        this.setState({ checkInDateToPayment: this.props.location.data.checkinDate});
        this.setState({ checkOutDateToPayment: this.props.location.data.checkoutDate});

        fetch("http://localhost:5000/rooms/?guests=" + this.props.location.data.numGuests + "&checkinDate=" + this.props.location.data.checkinDate + "&checkoutDate=" + this.props.location.data.checkoutDate)
            .then(res => res.json())
            .then(
                (result) => {


                    // BACKEND RESULTS ROOM LIST
                    // console.log("RESULTS FROM BACKEND");
                    // console.log(result)

                    let rooms = [];
                    // rooms.push(result[0].bedDetails, result[1].bedDetails);

                    const backendResults = result.map((room) =>


                        rooms.push(room)
                    );


                    this.setState({ rooms });

                    this.setState({ loading: false });

                    if (rooms.length > 0) {
                        this.setState({ showData: true });
                    } else {
                        this.setState({ showData: false });
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )


    }
}

export default withRouter(RoomList);