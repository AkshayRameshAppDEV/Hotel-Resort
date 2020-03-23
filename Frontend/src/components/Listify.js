import React from 'react';
import {

    Redirect, withRouter
} from "react-router-dom";


class Listify extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roomListItems: [],
            roomsToRender: [],
            redirectToPayments: false
        }

        this.goToPayments = this.goToPayments.bind(this);


    }

    goToPayments = () => {

        this.setState({ redirectToPayments: true });

    }

    componentDidMount() {
        const rooms = this.props.rooms;
        const roomsToRender = rooms.map((room) =>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{room.roomType} Room</h5>
                    <button class="btn btn-success" onClick={this.goToPayments}>RESERVE</button>
                </div>
                <p class="mb-1">Type of Bed Available: {room.bedDetails}</p>
                <p class="mb-1">Price :${room.price}</p>
                <p class="mb-1">Total Number of Guests Who can stay in this room: {room.numOfGuests}</p>
            </a>
        )

        this.setState({
            roomsToRender
        })



    }

    render() {

        if (this.state.redirectToPayments) {

            return <Redirect
                to={{
                    pathname: "/payments",
                    data: "From Listify"
                }}
            />
        }

        else {
            return (
                <div class="list-group w-100">
                    {this.state.roomsToRender}
                </div>
            );

        }

    }


}

export default withRouter(Listify);