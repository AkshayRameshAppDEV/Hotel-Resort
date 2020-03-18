import React from 'react';
import '../styles/Login.css';

import {
    Link
} from "react-router-dom";

// Login page

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        };

        this.submitPressed = this.submitPressed.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="center-screen loginDivBody">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={this.submitPressed}>
                            <h3>Log In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.emailError}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleChange} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" onClick={this.submitPressed}>Submit</button>
                            <p className="forgot-password text-right">
                                Don't have an account yet? {<Link to="/signup">Sign up</Link>}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    // as the user types email and passwod, keep updating state
    handleChange = event => {
        this.setState({[event.target.type]: event.target.value});
    };

    // once user presses submit button
    submitPressed = event => {

        event.preventDefault();

        let emailError = '',
            passwordError = '',
            errorExists = false;


        if (this.state.email == '') {
            emailError = 'Email cannot be blank';
        } else if (!this.state.email.includes('@')) {
            console.log(this.state.email + ' at time of validation');
            emailError = 'Invalid email';
        }

        if (this.state.password == '') {
            passwordError = 'Password cannot be blank';
        } else if (this.state.password.length < 6) {
            passwordError = 'Password length must be atleast six characters';
        }

        if (emailError || passwordError) {
            errorExists = true;
            this.setState({ emailError });
            this.setState({ passwordError });

        }

        // When all input is correct. This is where we will call backend API later
        if (!errorExists) {
            this.setState({emailError: '', passwordError: ''}, () => console.log(this.state));
        }
    }
}

export default Login;