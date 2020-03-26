import React from 'react';
import '../styles/Login.css';

import {
    Link
} from "react-router-dom";

var bcrypt = require('bcryptjs');


// Login page

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            usersEmailIdPasswordFromDB: {}
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
                            {/**
                                 * Adding id to identify email, password because
                                 * this.handleChange event takes only original type such as
                                 * text,email, password. Since username, first and last name
                                 * are of type text, then event.target.id = text, which will 
                                 * create unecessary issues in the variable names. After setting id,
                                 * event.target.id = id
                                 * FAIL SAFE METHOD
                                 */}
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

    componentDidMount() {

        var userObj = {}

        fetch("http://localhost:5000/users/")
            .then(res => res.json())
            .then(
                (result) => {

                    // console.log("RESULTS FROM USERS DB IN ASYNC METHOD \n" + JSON.stringify(result));

                    const backendResults = result.map((userObjects) =>

                        userObj[userObjects.email] = {
                            "id": userObjects._id,
                            "password": userObjects.password
                        }
                    );

                    console.log(userObj)

                    this.setState({ usersEmailIdPasswordFromDB: userObj });

                    // this.setState({ userEmailsFromDB: userEmails });

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }

    // as the user types email and passwod, keep updating state
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    // once user presses submit button
    submitPressed = event => {

        console.log(this.state.password)
        console.log(this.state.usersEmailIdPasswordFromDB)

        event.preventDefault();

        let emailError = '',
            passwordError = '',
            errorExists = false;


        if (this.state.email == '') {
            emailError = 'Email cannot be blank';
        } else if (!(/([\w\-]+\@[\w\-]+\.[\w\-]+)/g.test(this.state.email))) {
            console.log(this.state.email + ' at time of validation');
            emailError = 'Please enter a valid email address';
        } else if(!(this.state.email in this.state.usersEmailIdPasswordFromDB)){
            emailError = 'Email address doesn\'t exist';
        }

        if(emailError !== 'Email address doesn\'t exist'){

            if (this.state.password == '') {
                passwordError = 'Password cannot be blank';
            } else if (this.state.password.length < 8) {
                passwordError = 'Password length must be at least eight characters';
            } else if (!bcrypt.compareSync(this.state.password, this.state.usersEmailIdPasswordFromDB[this.state.email]["password"])) {
                passwordError = 'Your password is wrong. Please use the password you registered with your email.';
            }

        }

        else{
            passwordError = "Make sure your email is correct first."
        }



        if (emailError || passwordError) {
            errorExists = true;
            this.setState({ emailError });
            this.setState({ passwordError });

        }

        // When all input is correct. This is where we will call backend API later
        if (!errorExists) {
            this.setState({ emailError: '', passwordError: '' }, () => console.log(this.state));
        }
    }
}

export default Login;