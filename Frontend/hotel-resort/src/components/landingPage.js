import React, { Component } from "react";
import { Grid, Cell, Navigation } from 'react-mdl';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://images.unsplash.com/photo-1514977406940-016107995b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2636&q=80"
                            alt="Mountain Hotel"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Mountain Hotel Resort</h1>

                            <hr />

                            <p>Welcome to Mountain Hotel Resort. Please Register if you are a new user or login if you exisiting user to select rooms and more.</p>

                            <div className="social-links">

                                {/* Register */}

                                    <Navigation>
                                        <Link to="/register"><i className="fa fa-user-plus" aria-hidden="true" /></Link>
                                    </Navigation>

                                {/* Login */}
                                <Navigation>
                                        <Link to="/login"><i className="fa fa-sign-in" aria-hidden="true" /></Link>
                                </Navigation>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;