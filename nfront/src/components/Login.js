import React from 'react';
import '../styles/Login.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Just an example component. We will create components like these and render them in App.js.

class Login extends React.Component {
    render() {
        return (
            <div className="center-screen loginDivBody">
                <div className="auth-wrapper">
                    <div className="auth-inner">

                        <form action={<Link to="/"></Link>}>
                            <h3>Log In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                Don't have an account yet? {<Link to="/signup">Sign up</Link>}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;