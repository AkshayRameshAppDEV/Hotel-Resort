import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/first.jpeg';
import image2 from '../images/second.jpeg';
import image3 from '../images/third.jpeg';


// This is the carousel component after navbar which is used in App.js

class CarouselSection extends React.Component {
    render() {
        const centerCaption = {
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: 30,
            fontStyle: 'italic'
            
          };

        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={centerCaption}>
                        <h1>Welcome to Hotel Resort</h1>
                        <p>"Amazing Rooms"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        blurRadius={23}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={centerCaption}>
                        <h1>Welcome to Hotel Resort</h1>
                        <p>"Amazing Customer Service"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={centerCaption}>
                        <h1>Welcome to Hotel Resort</h1>
                        <p>"Five star Rating"</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselSection;