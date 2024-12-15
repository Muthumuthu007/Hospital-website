import React from 'react';
import './Service1.css'; // Optional CSS file for styling the page
import Gum from '../../Image/Gum health.jpg';
import Gum1 from '../../Image/Aesthetic gum surgery.jpg';
import { useLocation } from 'react-router-dom'; // To track route changes

const Service1 = () => {
  // Scroll to top on route change
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page loads
  }, [location]);

  return (
    <div className="service-page">
      <h1 className="service-title">Gum Health</h1>
      <h2 className="service-subtitle">Towards Healthier Gums</h2>

      <section>
        <h3>Periodontal Therapies:</h3>
        <ul>
          <li>Cleaning the teeth - Scaling using Ultrasonic / Piezotronic scalers</li>
          <li>Subgingival Root Planning / Curettage</li>
          <li>Flap Surgeries</li>
          <li>Bone grafting</li>
          <li>Guided Tissue Regeneration</li>
          <li>Periodontal Microsurgeries using Electrosurgery / Radiosurgery</li>
          <li>Gingivoplasty</li>
          <li>Crown Lengthening for Gummy Smile</li>
          <li>Depigmentation for Black Coloured Gums</li>
          <li>Frenectomy</li>
          <li>Vestibuloplasty</li>
          <li>Graft for Gingival Recession</li>
        </ul>
      </section>

      <section>
        <h3>Most Common Causes of Gum Diseases:</h3>
        <ul>
          <li>Gum diseases are caused by improper oral hygiene.</li>
          <li>Improper or inadequate brushing will lead to the formation of tooth deposits, which are mainly of two types.</li>
          <li>
            The initially formed deposits are thin, soft, yellowish-white in color, and cannot easily be seen with the naked eye. This is called <strong>dental plaque</strong>.
          </li>
          <li>
            Dental plaque hardens over time to form another type of deposit known as <strong>tartar or dental calculus</strong>.
          </li>
        </ul>
        <p>
          Proper brushing on a regular basis (twice a day) can remove most dental plaque. However, calculus requires professional removal. Harmful bacteria in these deposits lead to gum infections.
        </p>
        <p>
          Although gum diseases usually manifest after the age of 35, hereditary types can affect younger individuals and, if untreated, may lead to early tooth loss.
        </p>
      </section>

      <section>
        <h3>Symptoms and Signs of Gum Diseases:</h3>
        <ul>
          <li>Bleeding gums, especially while brushing or biting hard food</li>
          <li>Bright red, swollen gums</li>
          <li>Shaking teeth</li>
          <li>Pus discharge and foul taste or smell in the mouth</li>
          <li>Gum recession, leading to longer-looking teeth</li>
          <li>Food getting stuck between teeth</li>
          <li>Sensitivity to cold food or drinks</li>
        </ul>
        <p>
          If untreated, gum disease progresses to tooth loss. Dental X-rays or panoramic radiographs are often required to assess the severity of the condition.
        </p>
        <img src={Gum} alt="Gum Health" />
      </section>

      <section>
        <h3>Treatment of Gum Diseases:</h3>
        <p>
          The basic treatment starts with professional tooth cleaning (scaling). For advanced cases, root planing, flap surgery, bone grafting, or splinting may be required. While antibiotics and antiseptic mouthwashes help, deposits must be professionally removed for a cure.
        </p>
        <ul>
          <li>
            <strong>Scaling:</strong> Initial cleaning of deposits; multiple visits may be needed.
          </li>
          <li>
            <strong>Root Planing:</strong> Deep cleaning under the gums, often with local anesthesia.
          </li>
          <li>
            <strong>Flap Surgery:</strong> Surgically reflect gums, clean root surfaces, and remove infected tissue.
          </li>
          <li>
            <strong>Splinting:</strong> Attach loose teeth to adjacent firm teeth.
          </li>
        </ul>
      </section>

      <section>
        <h3>Esthetic Gum Surgery:</h3>
        <p>
          Esthetic gum surgery is a surgical procedure of the gums done for improvement of the esthetic appearance of patients. It is usually indicated for people with a gummy smile (excessive display of gums while smiling) and also for teeth with receded gums.
        </p>
        <img src={Gum1} alt="Aesthetic Gum Surgery" />
      </section>
    </div>
  );
};

export default Service1;
