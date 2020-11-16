import React from 'react'
import cleaning from "../../Assets/images/cleaning.png";
import Carwash from "../../Assets/images/Carwash.png";
import Plumber from "../../Assets/images/Plumber.png";
import Electric from "../../Assets/images/Electric.png";
import Carpenter from "../../Assets/images/Carpenter.png";
import Handyman from "../../Assets/images/Handyman.png";
import ACService from "../../Assets/images/ACService.png";

import { Container } from 'react-grid-system';
import SuggestedServices from "./SuggestedServices";

function OurServices() {
    return (
        <React.Fragment>
            <div className="service-head">
                <h2>Our Services</h2>
            </div>

            <div className="services-showcase">
            <Container fluid>
                <row>
                    <div className="service-grid">
                    <img className="img-fluid cleaner" alt="cleaning" src={cleaning} />
                    <p>cleaning</p>
                    </div>

                    <div className="service-grid">
                    <img className="img-fluid carwash" alt="carwash" src={Carwash} />
                    <p>Car Wash</p>
                    </div>

                    <div className="service-grid">
                    <img className="img-fluid plumber" alt="plumber" src={Plumber} />
                    <p>Plumber</p>
                    </div>

                    <div className="service-grid">
                    <img className="img-fluid electric" alt="electric" src={Electric} />
                    <p>Carpenter</p>
                    </div>
                </row>

                <row>
                    <div className="service-grid-bottom">
                    <img className="img-fluid carpenter" alt="carpenter" src={Carpenter} />
                    <p>Carpenter</p>
                    </div>

                    <div className="service-grid-bottom">
                    <img className="img-fluid handyman" alt="handyman" src={Handyman} />
                    <p>Handyman</p>
                    </div>

                    <div className="service-grid-bottom">
                    <img className="img-fluid acservice" alt="cleaning" src={ACService} />
                    <p>AC Services</p>
                    </div>
                </row>
                
                </Container>
            </div>
            
            <SuggestedServices />
        </React.Fragment>
    )
}


export default OurServices