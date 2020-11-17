import React from 'react';
import "./TestimonialSlider.scss";
// Import css files
import { Carousel, Card, Container } from 'react-bootstrap'
import Electric from "../../../Assets/images/Electric.png";



function TestimonialSlider() {
   

    return (
        <React.Fragment>
            <Container>
            <div className="testimonial-head pt-5">
            <h3 className="text-center pb-3">Testimonial</h3>
        <Carousel
            loop= "true"
            autoplayHoverPause= "true"
            autoplay="true"
            autoplaySpeed= "1000"
            dotsClass= "false"
            autoplaySpeed= "1000"
            nav= "false"
        >
            <Carousel.Item>
             <Card className="text-center testimonial-top">
            <Card.Body className="testimonial-inner">
            <img className="img-fluid  testimonial-icons" alt="testimonials" src={Electric} />

                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            </Card>
               
            </Carousel.Item>



            <Carousel.Item>
                        <Card className="text-center testimonial-top">
            <Card.Body className="testimonial-inner">
            <img className="img-fluid  testimonial-icons" alt="testimonials" src={Electric} />

                <Card.Title>Lorem ipsum</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
           
            </Card>
               
            </Carousel.Item>

           
        </Carousel>
        </div>
        </Container>
        </React.Fragment>
    )
}




export default TestimonialSlider