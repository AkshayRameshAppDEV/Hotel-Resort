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
            redirectToPayments: false,
            roomReserved: [],
            reserveButtonPosition: 0,
            userIdLoggedIn: ''

        }

        this.goToPayments = this.goToPayments.bind(this);


    }

    goToPayments = (event) => {

        this.setState({ redirectToPayments: true });
        this.setState({ reserveButtonPosition: event.target.getAttribute('data-key') })

    }

    componentDidMount() {
        console.log("Listify.js " + this.props.userIdLoggedIn);
        this.setState({ userIdLoggedIn: this.props.userIdLoggedIn });

        const rooms = this.props.rooms;
        this.setState({ roomReserved: rooms })
        const roomsToRender = rooms.map((room, i) =>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{room.roomType.toUpperCase()} ROOM</h5>
                    <img src={require('../styles/' + room.roomType + ".jpg")} alt={room.roomType} height="300" width="400" />
                    <button style={{ height: '100px', width: '250px' }} data-key={i} class="btn btn-success" onClick={this.goToPayments}>RESERVE</button>
                </div>
                <br/>
                <div style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold'}} >
                    <p class="mb-1">Type of Bed Available: {room.bedDetails}</p>
                    <p class="mb-1">Price :  ${room.price}</p>
                    <p class="mb-1">Total Number of Guests Who can stay in this room: {room.numOfGuests}</p>
                </div>
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
                    data: {
                        roomreserve: this.state.roomReserved[this.state.reserveButtonPosition],
                        userIdLoggedIn: this.state.userIdLoggedIn,
                        checkInDateToPayment: this.props.checkInDateToPayment,
                        checkOutDateToPayment: this.props.checkOutDateToPayment


                    }
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