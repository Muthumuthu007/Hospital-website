import React from 'react';
import { useLocation } from 'react-router-dom'; // To track route changes
import './Service1.css'; // Optional CSS file for styling
import image1 from "../../Image/S61.jpg"
import image2 from "../../Image/S62.jpg"
import image3 from "../../Image/S63.jpg"
import image4 from "../../Image/S64.jpg"
import image5 from "../../Image/S65.jpeg"
import image6 from "../../Image/S66.jpg"
const Service5 = () => {const location = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the page loads
    }, [location]);
    return (
        <div   className="service-page">
            <h1>Pedodontics - Children's Dentistry</h1>

<h2>Pit & Fissure Sealants</h2>
<p>These are fillings bonded to the biting surfaces of young permanent teeth to prevent decay. It helps in the majority of children and is a good preventive procedure.</p>
<img src={image1} alt='image1'></img>

<h2>Pulpotomy, Pulpectomy & SS Crown</h2>
<p>All severely damaged milk teeth are saved by this procedure wherein the decayed living tissue is removed and filled with restorative material.</p>
<p>The teeth that are saved by this method are further strengthened by capping with metal crowns.</p>
<img src={image2} alt='image2'></img>

<h2>Composite Filling</h2>
<p>Teeth affected by decay or trauma are restored with tooth-coloured composite material.</p>
<img src={image3} alt='image3'></img>

<h2>Space Maintainer</h2>
<p>The milk teeth guide the permanent set of teeth to erupt in a proper direction. In case of early loss of these teeth by decay or trauma, the space has to be preserved by space maintainers, thereby directing the erupting permanent teeth to their normal position.</p>
<img src={image4} alt='image4'></img>

<h2>Space Regainer</h2>
<img src={image5} alt='image5'></img>

<h2>Habit Breaking Appliance</h2>
<p>Oral habits such as thumb sucking, mouth breathing, and lip biting cause malalignment of teeth. This can be intervened by habit-breaking appliances.</p>
<img src={image6} alt='image6'></img>

<h2>Fluoride Application</h2>
<p>Regular application of fluoride agents makes the tooth structure stronger and helps prevent tooth decay to a great extent. It is usually done once every 6 months.</p>
        </div>
    );
};

export default Service5;
