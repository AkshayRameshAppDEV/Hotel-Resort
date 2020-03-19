import React from 'react';
import '../styles/SignUp.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Sign up page

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            firstNameError: '',
            lastNameError: '',
            userNameError: '',
            emailError: '',
            passwordError: ''
        };

        this.submitPressed = this.submitPressed.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (

            <div className="center-screen signUpDivBody">
                <div className="auth-wrapper">
                    <div className="auth-inner">

                        <form onSubmit={this.submitPressed}>
                            <h3>Sign Up</h3>
                            {/**
                                 * Adding id to identify username, first name, last name, email, password because
                                 * this.handleChange event takes only original type such as
                                 * text,email, password. Since username, first and last name
                                 * are of type text, then event.target.id = text, which will 
                                 * create unecessary issues in the variable names. After setting id,
                                 * event.target.id = id
                                 * FAIL SAFE METHOD
                                 */}
                            <div className="form-group">
                                <label>First name</label>


                                <input id="firstName" type="firstName" className="form-control" placeholder="First name" onChange={this.handleChange} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.firstNameError}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input id="lastName" type="text" className="form-control" placeholder="Last name" onChange={this.handleChange} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.lastNameError}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Username</label>
                                <input id="userName" type="text" className="form-control" placeholder="Username" onChange={this.handleChange} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.userNameError}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input id="email" type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.emailError}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input id="password" type="password" className="form-control" placeholder="Enter password" onChange={this.handleChange} />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" onClick={this.submitPressed}>Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered? {<Link to="/login">Log in</Link>}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    // as the user types first name, last name, username, email and passwod, keep updating state
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    // once user presses submit button
    submitPressed = event => {

        event.preventDefault();

        let emailError = '',
            passwordError = '',
            userNameError = '',
            lastNameError = '',
            firstNameError = '',
            errorExists = false;


        if (this.state.email == '') {
            emailError = 'Email cannot be blank';
        } else if (!/([\w\-]+\@[\w\-]+\.[\w\-]+)/.test(this.state.email)) {
            console.log(this.state.email + ' at time of validation');
            emailError = 'Please enter a valid email address';
        }

        if (this.state.password == '') {
            passwordError = 'Password cannot be blank';
        } else if (this.state.password.length < 6) {
            passwordError = 'Password length must be atleast six characters';
        }

        if (this.state.userName == '') {
            userNameError = 'Username cannot be blank';
        }

        if (this.state.lastName == '') {
            lastNameError = 'Last Name cannot be blank';
        }

        if (this.state.firstName == '') {
            firstNameError = 'First Name cannot be blank';
        }

        if (emailError || passwordError || userNameError || lastNameError || firstNameError) {
            errorExists = true;
            this.setState({ emailError });
            this.setState({ passwordError });
            this.setState({ userNameError });
            this.setState({ lastNameError });
            this.setState({ firstNameError });

        }

        // When all input is correct. This is where we will call backend API later
        if (!errorExists) {
            this.setState({ emailError: '', passwordError: '', userNameError: '', lastNameError: '', firstNameError: '' }, () => console.log(this.state));
        }
    }
}

export default SignUp;