import React from 'react';
import '../styles/resortInfo.css';
import { Container, Row, Col } from 'react-bootstrap';

// Contains all resort info

class ResortInfo extends React.Component {
    render() {
        return (
            <div>
                <div id="aboutus">
                    <Container>
                        <Row>
                            <Col>
                                <p id="aboutUsHeading">About Us</p>

                                <h3 id="resortNameHeading">Our Resort Name</h3>

                                <p>
                                    Sona.com is a leading online accommodation site. We’re passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.
                                    So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house, or tree house, we’ve got you covered.
                                </p>
                            </Col>

                            <Row>
                                <Col>
                                    <img src="https://colorlib.com/preview/theme/sona/img/about/about-1.jpg" />
                                </Col>

                                <Col>
                                    <img src="https://colorlib.com/preview/theme/sona/img/about/about-2.jpg" />
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </div>

                <div id="whatwedo">

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div>
                                    <h1>What We Do</h1>
                                    <h2>Discover Our Services</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-plane"></i>
                                    <h4>Travel Plan</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-cutlery"></i>
                                    <h4>Catering Service</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-user-circle"></i>
                                    <h4>Babysitting</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-home"></i>
                                    <h4>Laundry</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-car"></i>
                                    <h4>Hire Driver</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-beer"></i>
                                    <h4>Bar & Drink</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="roomsInformation">
                    <h1>Rooms Info</h1>
                </div>


                <div id="activities">
                    <h1>Activities</h1>
                </div>


                <div id="nearbyAttractions">
                    <h1>NearBy Attractions</h1>
                </div>

                <div id="footer">
                    <h1>Footer</h1>
                </div>
            </div>
        );
    }
}

export default ResortInfo;