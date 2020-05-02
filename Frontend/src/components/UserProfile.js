import React from 'react';
import {
    Redirect, withRouter
} from "react-router-dom";


class UserProfile extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            userdata: {},
            reservationData: []
        }

        this.deleteReservation = this.deleteReservation.bind(this);
        this.NumberList = this.NumberList.bind(this);
    }

    deleteReservation = (event) => {
        // nothing
        console.log("deleted" + event.target.getAttribute('data-key'))

        console.log(this.state.reservationData);

        let selectedReservationObject = this.state.reservationData[event.target.getAttribute('data-key')];
        let idOfSelectedReservationObject = selectedReservationObject._id;

        let locReservationData = this.state.reservationData;
        locReservationData.splice(event.target.getAttribute('data-key'), 1);

        fetch('http://localhost:5000/reservations/' + idOfSelectedReservationObject, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(res => console.log(res))
            .then(() => this.setState({reservationData: locReservationData}));
    }

    NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );
        // return (
        //     <ul>{listItems}</ul>
        // );

        const reservationsToRender = numbers.map((prop, i) =>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Checkin Date: {prop.checkInDate}</h5>
                    <h5 class="mb-1">Checkout Date: {prop.checkOutDate}</h5>
                    <button data-key={i} class="btn btn-danger" onClick={this.deleteReservation} >DELETE</button>
                </div>
            </a>
        )

        return reservationsToRender;
    }

    render() {

        var checkInDates = this.state.reservationData.map(data => data.checkInDate);
        var checkOutDates = this.state.reservationData.map(data => data.checkOutDate);

        if (this.state.userdata.reservations) {
            return (
                <div className="jumbotron" style={{textAlign: "center"}}>
                    <h4>First Name: {this.state.userdata.firstName}</h4>
                    <h4>Last Name: {this.state.userdata.lastName}</h4>
                    <h4>Email: {this.state.userdata.email}</h4>

                    <h4>Your reservations:</h4>
                    <p>{this.state.reservationData.length}</p>
                    <this.NumberList numbers={this.state.reservationData} />
                </div>
            )
        } else {

            return (
                <div className="jumbotron">
                    <p>{this.state.userdata.firstName}</p>
                    <p>{this.state.userdata.lastName}</p>
                    <p>{this.state.userdata.email}</p>

                </div>
            )
        }
    }

    componentDidMount = () => {
        if (this.props.location.data) {

            fetch('http://localhost:5000/users/' + this.props.location.data.userId).then(response => {
                return response.json();
            }).then(data => {
                console.log("this is from UserProfile.js");
                console.log(data);
                this.setState({ userdata: data });

                data.reservations.forEach(reservationId => {

                    console.log("reservation id: " + reservationId)

                    fetch('http://localhost:5000/reservations/' + reservationId).then(reservationResponse => {
                        return reservationResponse.json();
                    }).then(reservationData => {

                        console.log(reservationData);
                        return reservationData;
                    }).then(reservationData => {
                        let localReservationData = this.state.reservationData;
                        localReservationData.push(reservationData);
                        console.log(localReservationData);
                        this.setState({ reservationData: localReservationData });
                    })

                })
            })
        } else {
            console.log("this is userprofile.js not if");
        }
    }
}

export default withRouter(UserProfile);