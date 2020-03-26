import React from 'react';

import {
    Link,
    Redirect, withRouter
} from "react-router-dom";


// This is the bootstrap navbar component which is used in App.js

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: ''
        }

        console.log('availability loc from Navbar.js - New USER ID');

        if (this.props.location.data) {
            console.log(this.props.location.data.newUserId);
        } else {
            console.log('user not logged in');
        }

    }







    render() {

        if (this.state.firstName != '' && this.state.firstName != undefined) {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Hotel Resort</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            {/* <a className="nav-item nav-link" href="#">Register <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Login</a> */}
                            <p className="navbar-brand">Hello {this.state.firstName}</p>
                        </div>
                    </div>
                </nav>
            )
        } else {

            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Hotel Resort</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            {/* <a className="nav-item nav-link" href="#">Register <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Login</a> */}
                            <Link to="/login" className="nav-item nav-link">Login</Link>
                            <Link to="/signup" className="nav-item nav-link">Sign Up</Link>
                        </div>
                    </div>
                </nav>

            );
        }
    }

    componentDidMount = () => {
        if (this.props.location.data) {

            fetch('http://localhost:5000/users/' + this.props.location.data.newUserId).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                let firstName = data.firstName;
                this.setState({ firstName });
            })
        }
    }
}

export default withRouter(Navbar);