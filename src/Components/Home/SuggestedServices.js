import React from 'react'
import Suggestedone from "../../Assets/images/suggested-services/Suggestedone.jpg";
import Suggestedtwo from "../../Assets/images/suggested-services/Suggestedtwo.jpg";

import { Container } from 'react-grid-system';
import AboutMrMahir from './AboutMrMahir';

function SuggestedServices() {
    return (
        <React.Fragment>
            <div className="suggested-service">
                <h2>Suggested Services</h2>
      
            <div className="services-we-provide">
                 <Container fluid>
                 <row>
                    <div className="service-suggested-grid">
                    <img className="img-fluid suggestedcleaning" alt="suggested cleaning" src={Suggestedone} />
                    <p>Cleaning</p>
                    </div>

                    <div className="service-suggested-grid">
                    <img className="img-fluid suggestedacservice" alt="suggested acservice" src={Suggestedtwo} />
                    <p>AC Services</p>
                    </div>

                    <div className="service-suggested-grid">
                    <img className="img-fluid suggestedcleaning" alt="suggested cleaning" src={Suggestedone} />
                    <p>Tap Fitting</p>
                    </div>

                    <div className="service-suggested-grid">
                    <img className="img-fluid suggestedacservice" alt="suggested acservice" src={Suggestedtwo} />
                    <p>Car Wash</p>
                    </div>
                </row>

                </Container>
            </div>
            </div>

            <AboutMrMahir />
        </React.Fragment>
    )
}


export default SuggestedServices
