import React from 'react';
import '../styles/resortInfo.css';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../images/pic1.jpg';
import image2 from '../images/pic2.jpg';
import image3 from '../images/room-b1.jpg';
import image4 from '../images/room-b2.jpg';
import image5 from '../images/room-b3.jpg';
import image6 from '../images/canyon.jpg';
import image7 from '../images/seaworld.jpg';



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
                            <Col>
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
                            <Col>
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
                            <Col>
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
                     <Container>
                     <Row>
                            <Col lg="12">
                                <div>
                                    <h1 id="roomsInfo">Available Rooms</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3" md="6">
                                <div class = "doubleroom">
                                    <img src={image3}  width="400" height="300"/>
                                    <div class="fadedbox">
                                        <div class="title text">
                                        <h3>Standard Room</h3>
                                <h2>129$<span>/Pernight</span></h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="r-o">Size:</td>
                                            <td>30 ft</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Capacity:</td>
                                            <td>Max person 2</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Bed:</td>
                                            <td>Twin Beds</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Services:</td>
                                            <td>Wifi, Television, Bathroom,...</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="#" class="primary-btn">More Details</a>
                                </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="6">
                                <div class = "deluxeroom">
                                <img src={image5}  width="400" height="300"/>
                                    <div class="fadedbox">
                                    <div class="title text">
                                        <h3>Deluxe Room</h3>
                                <h2>198$<span>/Pernight</span></h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="r-o">Size:</td>
                                            <td>50 ft</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Capacity:</td>
                                            <td>Max person 4</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Bed:</td>
                                            <td>Queen Beds</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Services:</td>
                                            <td>Wifi, Television, Bathroom, Gym, Swimming Pool...</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="#" class="primary-btn">More Details</a>
                                    </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="6">
                                <div class = "premiumkingroom">
                                <img src={image4}  width="400" height="300"/>
                                    <div class="fadedbox">
                                        <div class="title text">
                                        <h3>Royal Room</h3>
                                <h2>259$<span>/Pernight</span></h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="r-o">Size:</td>
                                            <td>80 ft</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Capacity:</td>
                                            <td>Max person 6</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Bed:</td>
                                            <td>King Beds</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Services:</td>
                                            <td>Wifi, Television, Bathroom, Spa, Complimentary Lunch, Private Gym...</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="#" class="primary-btn">More Details</a>
                                    </div>
                                     </div>
                                </div>
                            </Col>
                           
                        </Row>
                     </Container>
                </div>


                <div id="activities">
                     <Container>
                        <Row>
                            <Col lg="12">
                                <div>
                                    <h1 id="activitiesHeading">Activities</h1>
                                    <h1>Activities We Provide</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class="service-item">
                                    <i class="fa fa-plane"></i>
                                    <h4>Bicycling</h4>
                                    <p>We offer bicycles including two-seater bikes and children’s bikes with training 
                                    wheels as a complimentary amenity for guests.
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-cutlery"></i>
                                    <h4>Tennis</h4>
                                    <p>Our tennis facility includes six HydroGrid® clay courts 
                                    where guests can play and train with our certified
                                     United States Professional Tennis Association (USPTA) Professional.</p>
                                </div>
                            </Col>
                            <Col>
                                <div class="service-item">
                                    <i class="fa fa-user-circle"></i>
                                    <h4>Fitness</h4>
                                    <p> Maintain your regular fitness routine with cardiovascular equipment and a three-station weight machine in our fitness room.
                                    </p>
                                </div>
                            </Col>
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-car"></i>
                                    <h4>Golfing</h4>
                                    <p>Take a break from the beach and spend an afternoon at The Dunes Golf & Tennis Club. This masterfully designed 18 hole championship course is set within a stunning wildlife preserve and welcomes guests of our Resort.</p>
                                </div>
                            </Col>
                            <Col>
                                <div class="service-item">
                                    <i class="fa fa-home"></i>
                                    <h4>Swimming</h4>
                                    <p>Jump into the sparkling blue-green waters of the Gulf of Mexico or choose from the five heated pools on property,
                                     including the main pool with children’s water slide.</p>
                                </div>
                            </Col>
                            
                            <Col lg="4" sm="6">
                                <div class="service-item">
                                    <i class="fa fa-beer"></i>
                                    <h4>Paddling</h4>
                                    <p>
                                        Paddle and play with our onsite kayaks and paddleboards, a complimentary amenity for guests.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div id="nearbyAttractions">
                     <Container>
                        <Row>
                            <Col lg="12">
                                <div>
                                    <h1 id="nearbyAttractionsHeading">Nearby Attractions</h1>
                                    <h1>Sights to Visit</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="8">
                                <img src={image6}  width="700" height="500"/>
                            </Col>
                            <Col lg="4" id="aboutHotelDescription">
                            <h1 id="aboutUsHeading">Grand Canyon</h1>

                                <p>
                                    Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history. Viewpoints include Mather Point, Yavapai Observation Station and architect Mary Colter’s Lookout Studio and her Desert View Watchtower. Lipan Point, with wide views of the canyon and Colorado River, is a popular, especially at sunrise and sunset.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4" id="aboutHotelDescription">
                            <h1 id="aboutUsHeading">Sea World</h1>

                                <p>
                                    SeaWorld San Antonio is a 250-acre marine mammal park, oceanarium and animal theme park, in the Westover Hills District of San Antonio, Texas, on the city’s west side. It is the largest of the three parks in the SeaWorld chain owned by SeaWorld Entertainment and one of the world's largest marine-life theme parks focused on conservation, education and animal rescue. The other SeaWorld parks are in San Diego, California and Orlando, Florida. It is a member of the Alliance of Marine Mammal Parks and Aquariums and is accredited by the Association of Zoos and Aquariums.
                                </p>
                            </Col>
                            <Col lg="8">
                                <img src={image7}  width="700" height="500"/>
                            </Col>
                        </Row>
                     </Container>
                </div>

                <div class="footer-section">
                    <Container>
                    <div class="footer-text">
                        <Row>
                        <Col lg="6">
                        <div class="ft-about">
                            <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                            <div>
                                <a href="#"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;
                                <a href="#"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;
                                <a href="#"><i class="fa fa-tripadvisor"></i></a>&nbsp;&nbsp;
                                <a href="#"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;
                                <a href="#"><i class="fa fa-youtube-play"></i></a>&nbsp;&nbsp;
                            </div>
                        </div>
                    </Col>
                    <Col lg = "6">
                        <div class="ft-contact">
                            <h6>Contact Us</h6>
                            <ul>
                                <li>(100) 100 9191</li>
                                <li>hotelResort@wpl.edu</li>
                                <li>7102 Hotel Rd, Hotel, TX - 7932</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
                </div>
            </div>
        );
    }
}

export default ResortInfo;