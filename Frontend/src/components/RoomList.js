import React from 'react';
import { Spinner, ListGroup } from 'react-bootstrap';
import '../styles/RoomList.css';

import {
    withRouter
} from "react-router-dom";

class RoomList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rooms: [],
            showData: false
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
                        <this.listify rooms={this.state.rooms} />
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

    listify(props) {

        const rooms = props.rooms;
        console.log("ROOMS FOR UI");
        console.log(rooms)
        const roomListItems = rooms.map((room) =>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{room.roomType} Room</h5>
                    <button class="btn btn-success">RESERVE</button>
                </div>
                <p class="mb-1">Type of Bed Available: {room.bedDetails}</p>
                <p class="mb-1">Price :${room.price}</p>
                <p class="mb-1">Total Number of Guests Who can stay in this room: {room.numOfGuests}</p>
            </a>
        );
        return (
            <div class="list-group w-100">
                {roomListItems}
            </div>
        );
    }

    componentDidMount() {
        // do api call



        fetch("http://localhost:5000/rooms/?guests=" + this.props.location.data.numGuests + "&checkinDate=" + this.props.location.data.checkinDate + "&checkoutDate=" + this.props.location.data.checkoutDate) //MAKE IT DYNAMIC from CHECK AVAILABILITY PAGE
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