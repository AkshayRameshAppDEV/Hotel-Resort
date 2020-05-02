import React from 'react'
import {

    Redirect, withRouter
} from "react-router-dom";

import { Jumbotron, Button } from 'react-bootstrap';

import '../styles/OrderConfirmation.css';

class OrderConfirmation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reservedBedDetails: [],
            reservedRoomType: "",
            reservedRoomPrice: 0,
            reservedRoomNumberOfGuests: 0,
            redirectToHome: false
        };

        console.log('order confirmation results');
        console.log(this.props.location.data.roomreserve);

        this.gotohomepressed = this.gotohomepressed.bind(this);
    }

    render() {

        if (this.state.redirectToHome) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <div id="orderConfirmationInfo">
                    <Jumbotron fluid>
                        <h1>Order Complete!</h1>
                        <p>
                            Room Type: {this.state.reservedRoomType}
                        </p>
                        <p>
                            Bed Details: {this.state.reservedBedDetails}
                        </p>
                        <p>
                            Number of guests: {this.state.reservedRoomNumberOfGuests}
                        </p>
                        <p>
                            Price: {this.state.reservedRoomPrice}
                        </p>
                        <p>
                            <Button onClick={this.gotohomepressed} variant="primary">Go to homepage</Button>
                        </p>
                    </Jumbotron>
                </div>
            )
        }
    }

    componentDidMount() {
        this.setState({ roomreserve: this.props.location.data.roomreserve });
        this.setState({ reservedBedDetails: this.props.location.data.roomreserve.bedDetails })
        this.setState({ reservedRoomType: this.props.location.data.roomreserve.roomType })
        this.setState({ reservedRoomPrice: this.props.location.data.roomreserve.price })
        this.setState({ reservedRoomNumberOfGuests: this.props.location.data.roomreserve.numOfGuests })

    }

    gotohomepressed = () => {
        this.setState({ redirectToHome: true });
    }
}

export default withRouter(OrderConfirmation);