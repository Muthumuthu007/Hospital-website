import React from 'react';
import { useLocation } from 'react-router-dom'; // To track route changes
import './Service1.css'; 
import image1 from "../../Image/S71.jpg"

const Service7 = () => {const location = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the page loads
    }, [location]);
    return (
        <div className="service-page">
            <h1>Full Mouth Rehabilitation</h1>

            <p>We perform the following specialized services for Full Mouth Rehabilitation:</p>

            <ul>
                <li>Complete examination</li>
                <li>Diagnostic records</li>
                <li>Treatment planning</li>
                <li>Removal of Oral Sepsis Scaling</li>
                <li>Periodontal procedures such as root planing & Flap Surgeries with or without Bone grafting</li>
                <li>Removal of mutilated and impacted teeth</li>
                <li>Saving badly decayed teeth by Root Canal Treatment</li>
                <li>Replacement of missing teeth by Bridge & Crowns or Implants</li>
                <li>Advanced implant techniques for replacing missing teeth without involving adjacent teeth</li>
                <li>Cosmetic procedures like Smile Designing - closure of spaces between teeth</li>
                <li>Teeth whitening</li>
                <li>Gingival Contouring</li>
                <li>De-pigmentation of gingiva</li>
                <li>Correction of malaligned teeth by Orthodontic treatment</li>
            </ul><img src={image1} alt='image1'></img>


            <p>We aim to improve the overall functions of the mouth and provide the best Quality of Life through these services.</p>
        </div>
    );
};

export default Service7;
