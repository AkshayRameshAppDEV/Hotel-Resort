import React from 'react'
import {

    Redirect, withRouter
} from "react-router-dom";

class Payments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reservedBedDetails: [],
            reservedRoomType: "",
            reservedRoomPrice: 0,
            reservedRoomNumberOfGuests: 0
        };

        console.log('RESERVED ROOM CLICKED DATA FROM LISTIFY.JS');
        console.log(this.props.location.data.roomreserve);
    }

    render() {
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
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.setState({ reservedBedDetails: this.props.location.data.roomreserve.bedDetails })
        this.setState({ reservedRoomType: this.props.location.data.roomreserve.roomType })
        this.setState({ reservedRoomPrice: this.props.location.data.roomreserve.price })
        this.setState({ reservedRoomNumberOfGuests: this.props.location.data.roomreserve.numOfGuests })

    }
}

export default withRouter(Payments);