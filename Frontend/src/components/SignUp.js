import React from 'react';
import '../styles/SignUp.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Redirect,
    Link
} from "react-router-dom";

var bcrypt = require('bcryptjs');


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
            passwordError: '',
            userEmailsFromDB: [],
            userIdNewUser: "",
            redirect: false
        };

        this.submitPressed = this.submitPressed.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.passwordOnFocus = this.passwordOnFocus.bind(this, 'passwordOnFocusRef');
        this.passwordOnBlur = this.passwordOnBlur.bind(this, 'passwordOnBlurRef');
        this.passwordOnKeyUp = this.passwordOnKeyUp.bind(this, 'passwordOnKeyUpRef');
        this.getAllUsersFromDB = this.getAllUsersFromDB.bind(this);

    }

    passwordOnFocus(refName, e) {
        this.refs.messageRef.style.display = "block";
    }

    passwordOnBlur(refName, e) {
        this.refs.messageRef.style.display = "none";
    }

    passwordOnKeyUp(refName, e) {
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (e.target.value.match(lowerCaseLetters)) {
            this.refs.letterRef.classList.remove("invalid");
            this.refs.letterRef.classList.add("valid");
        } else {
            this.refs.letterRef.classList.remove("valid");
            this.refs.letterRef.classList.add("invalid");
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (e.target.value.match(upperCaseLetters)) {
            this.refs.capitalRef.classList.remove("invalid");
            this.refs.capitalRef.classList.add("valid");
        } else {
            this.refs.capitalRef.classList.remove("valid");
            this.refs.capitalRef.classList.add("invalid");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (e.target.value.match(numbers)) {
            this.refs.numberRef.classList.remove("invalid");
            this.refs.numberRef.classList.add("valid");
        } else {
            this.refs.numberRef.classList.remove("valid");
            this.refs.numberRef.classList.add("invalid");
        }

        // Validate length
        if (e.target.value.length >= 8) {
            this.refs.lengthRef.classList.remove("invalid");
            this.refs.lengthRef.classList.add("valid");
        } else {
            this.refs.lengthRef.classList.remove("valid");
            this.refs.lengthRef.classList.add("invalid");
        }
    }

    render() {
        if (this.state.redirect) {

            return (
                <Redirect
                    to={{
                        pathname: "/",
                        data: { newUserId: this.state.userIdNewUser }
                    }}
                />
            );
        }
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
                                <input id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    onChange={this.handleChange}
                                    onFocus={this.passwordOnFocus} ref="passwordOnFocus"
                                    onBlur={this.passwordOnBlur} ref="passwordOnBlur"
                                    onKeyUp={this.passwordOnKeyUp} ref="passwordOnKeyUp"
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </div>
                            </div>

                            <div id="message" ref="messageRef">
                                <h5>Password must contain the following:</h5>
                                <p ref="letterRef" id="letter" className="invalid">A <b>lowercase</b> letter</p>
                                <p ref="capitalRef" id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                                <p ref="numberRef" id="number" className="invalid">A <b>number</b></p>
                                <p ref="lengthRef" id="length" className="invalid">Minimum <b>8 characters</b></p>
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

    async getAllUsersFromDB() {

        let userEmails = [];

        fetch("http://localhost:5000/users/")
            .then(res => res.json())
            .then(
                (result) => {

                    // console.log("RESULTS FROM USERS DB IN ASYNC METHOD \n" + JSON.stringify(result));

                    const backendResults = result.map((userObjects) =>


                        userEmails.push(userObjects.email)
                    );


                    this.setState({ userEmailsFromDB: userEmails });

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )

    }

    componentDidMount() {

        this.getAllUsersFromDB();

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
        } else if (!(/([\w\-]+\@[\w\-]+\.[\w\-]+)/g.test(this.state.email))) {
            console.log(this.state.email + ' at time of validation');
            emailError = 'Please enter a valid email address';
        } else if (this.state.userEmailsFromDB.includes(this.state.email)) {
            emailError = 'Email already exists. Please try using another email.';
        }

        if (this.state.password == '') {
            passwordError = 'Password cannot be blank';
        } else if (this.state.password.length < 8) {
            passwordError = 'Password length must be atleast six characters';
        } else if (!(/[a-z]/g.test(this.state.password))) {
            passwordError = 'Should contain atleast a lowercase letter';
        } else if (!(/[A-Z]/g.test(this.state.password))) {
            passwordError = 'Should contain atleast an uppercase letter';
        } else if (!(/[0-9]/g.test(this.state.password))) {
            passwordError = 'Should contain a number';
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
            this.setState({ emailError: '', passwordError: '', userNameError: '', lastNameError: '', firstNameError: '' });

            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(this.state.password, salt);

            // Simple POST request with a JSON body using fetch
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName, email: this.state.email, password: hash })
            };
            fetch('http://localhost:5000/users/', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({
                    userIdNewUser: data
                }, () => { this.setState({ redirect: true }) }

                ));
        }


    }
}

export default withRouter(SignUp);