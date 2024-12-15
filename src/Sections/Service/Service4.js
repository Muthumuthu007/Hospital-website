import React from 'react';
import { useLocation } from 'react-router-dom'; // To track route changes
import './Service1.css'; // Optional CSS file for styling
import image1 from "../../Image/S41.jpg"

import image2 from "../../Image/S42.jpg"


const Service4 = () => {const location = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the page loads
    }, [location]);
    return (
        <div className="service-page">
        <div>
            <h1>Artificial Teeth: </h1>
            <h2>Replacing Lost Teeth</h2>
            <p>A million-dollar smile is globally welcomed. Nice teeth radiate character, attractiveness, and liveliness. They provide you with self-confidence, charisma, and self-assurance.</p>
            <p>The following Prosthodontic services are available:</p>
            <ul>
                <li>Replacement of Missing Teeth</li>
                <li>Implant Dentistry</li>
                <li>Fixed Bridges</li>
                <li>Partial & Complete Dentures</li>
                <li>Crowns</li>
                <li>Porcelain Laminates (Veneers)</li>
            </ul>
            <h2>Replacement of Missing Teeth</h2>
            <p>Replacement of missing teeth can be accomplished by three different modes of treatment:</p>
            <ul>
                <li>Implant Dentistry</li>
                <li>Fixed Bridges</li>
                <li>Removable partial or complete dentures</li>
            </ul>
            <p>The best treatment depends on the number, location, and condition of the remaining teeth. All three of these options will restore function and stabilize the bite in an esthetically pleasing way.</p>

            <h3>Implant Dentistry</h3>
            <p>Dental implants serve as the foundation for many types of tooth replacement. Implants can replace one tooth or several missing teeth with crowns or bridges that are fixed in place. For the replacement of many teeth or all of the teeth, implants can support very secure removable dentures or fixed bridges if the conditions in the mouth allow it. Implants allow excellent esthetic and functional replacements of missing teeth.</p>
            <img src={image1} alt='image1'></img>
            <h3>Fixed Bridges</h3>
            <p>Fixed bridges are natural-looking tooth replacements that help maintain facial structure, reduce stress on the jaw, and fill in the gaps caused by missing teeth. These bridges are cemented on the existing teeth and do not come out.</p>

            <h3>Removable Partial Dentures</h3>
            <p>Removable partial dentures replace teeth lost due to decay, periodontal disease, or injury. They replace the missing teeth, utilizing the remaining teeth to support and secure the removable partial denture. Removable partial dentures are a functional, esthetic, and cost-effective means of tooth replacement. They can be removed to clean the denture or the remaining natural teeth.</p>

            <h3>Complete Dentures</h3>
            <p>Complete dentures replace teeth when all upper and/or lower teeth are missing. They restore the function of eating, restore proper facial esthetics, and help people talk properly. Lower dentures, though more difficult, can restore proper function and comfort. Dental implants stabilize the lower denture better!</p>
            <img src={image2} alt='image2'></img>
            <h3>Crowns</h3>
            <p>Crowns are used to strengthen and improve the shape, size, or color of teeth. They can support broken or weak teeth or those with large fillings; provide a smooth, strong, attractively contoured surface for stained, irregular, or otherwise abnormal teeth; and aid in the implantation of bridges and other implants.</p>

            <h3>Porcelain Laminates (Veneers)</h3>
            <p>Porcelain veneers, or laminates, are very thin, tooth-colored shells that are custom-fit and bonded to the front sides of teeth to close gaps, cover stains and discolorations, and correct chipped or irregular teeth to give you a bright, even, attractive smile.</p>
        </div>
        </div>
    );
};

export default Service4;
