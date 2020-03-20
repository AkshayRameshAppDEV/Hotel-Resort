import React from 'react';
import '../styles/resortInfo.css';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../images/pic1.jpg';
import image2 from '../images/pic2.jpg';

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

                                <h2 id="resortNameHeading">Awesome Resort</h2>

                                <p>
                                    Awesome Resort is so awesome Awesome Resort is so awesome Awesome Resort is so awesome Awesome Resort is so awesome 
                                    Awesome Resort is so awesome Awesome Resort is so awesome 
                                </p>
                            </Col>

                            <Row>
                                <Col>
                                    <img src={image1} />
                                </Col>

                                <Col>
                                    <img src={image2} />
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
                                    <p>We have plenty of vacation packages for you to choose from. Some of our plans include
                                    adventure trips to Grand Canyon.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-cutlery"></i>
                                    <h4>Catering Service</h4>
                                    <p>We provide excellent catering services with lot of cuisine varities from around the world.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-user-circle"></i>
                                    <h4>Babysitting</h4>
                                    <p> We provide excellent babysitting services including storytelling, games and much more.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-home"></i>
                                    <h4>Laundry</h4>
                                    <p>We provide washing and drying and it all covers in the hotel cost.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-car"></i>
                                    <h4>Hire Driver</h4>
                                    <p>We have experienced drivers who can take you for tours around town and also to your place of work.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="service-item">
                                    <i class="fa fa-beer"></i>
                                    <h4>Bar & Drink</h4>
                                    <p>
                                        Open 7 days a week, H Bar is the perfect spot to unwind over cocktails and small plates. Seated next to our Lobby area in the heart of the hotel, H Bar offers an expansive space to socialize, catch a game, or just chill with a glass of wine and a good book.
                                    </p>
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