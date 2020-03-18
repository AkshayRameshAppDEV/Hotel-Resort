import React from 'react';
import '../styles/SignUp.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Just an example component. We will create components like these and render them in App.js.

class SignUp extends React.Component {
    render() {
        return (

            <div className="center-screen signUpDivBody">
                <div className="auth-wrapper">
                    <div className="auth-inner">

                        <form action= {<Link to="/"></Link>}>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered {<Link to="/login">sign in?</Link>}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;