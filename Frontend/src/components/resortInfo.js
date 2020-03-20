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
                                <h1 id="aboutUsHeading">About Us</h1>

                                <h1>Hotel Resort</h1>

                                <p id="aboutHotelDescription">
                                    Hotel Resorts is one of the most recognized name in the industry, and lots of travelers who come to our resort from around the world have been constantly saying “Hotel Resort is simply the best place to and has lot of facilities”.  We have also featured in 2019 Travel magazine for our best innovation approach and strategy. Hotel Resort helps making each traveler easier with our simple design, great innovation concepts and hospitality. We strive to provide our customers with the highest quality all the time. 
                                    <br/>
                                    <br/>
                                    Wish you a very Happy Stay!
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

                    <Container>
                        <Row>
                            <Col lg="12">
                                <div>
                                    <h1 id="whatWeDoHeading">What We Do</h1>
                                    <h1>Discover Our Services</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-plane"></i>
                                    <h4>Travel Plan</h4>
                                    <p>We have plenty of vacation packages for you to choose from. Some of our plans include
                                    adventure trips to Grand Canyon.
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-cutlery"></i>
                                    <h4>Catering Service</h4>
                                    <p>We provide excellent catering services with lot of cuisine varities from around the world.</p>
                                </div>
                            </Col>
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-user-circle"></i>
                                    <h4>Babysitting</h4>
                                    <p> We provide excellent babysitting services including storytelling, games and much more.
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-home"></i>
                                    <h4>Laundry</h4>
                                    <p>We provide washing and drying and it all covers in the hotel cost.</p>
                                </div>
                            </Col>
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-car"></i>
                                    <h4>Hire Driver</h4>
                                    <p>We have experienced drivers who can take you for tours around town and also to your place of work.</p>
                                </div>
                            </Col>
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-beer"></i>
                                    <h4>Bar & Drink</h4>
                                    <p>
                                        Open 7 days a week, H Bar is the perfect spot to unwind over cocktails and small plates. Seated next to our Lobby area in the heart of the hotel, H Bar offers an expansive space to socialize, catch a game, or just chill with a glass of wine and a good book.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

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