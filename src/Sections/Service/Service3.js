import React from 'react';
import './Service1.css'; // Optional CSS file for styling
import image1 from "../../Image/s3.jpg";
import image2 from "../../Image/s31.jpg"
import image3 from "../../Image/s32.jpg"
import { useLocation } from 'react-router-dom'; // To track route changes

const Service3 = () => { const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page loads
  }, [location]);

  return (
    <div className="service-page">
    <h1>Dental and Jaw Surgeries</h1>
      <h2 className="service-title">Teeth Removal and Jaw Surgeries</h2>

      {/* Wisdom Teeth Extractions Section */}
      <section >
        <div >
          <h3>Wisdom Teeth Extractions</h3>
          <p>
            Wisdom teeth, or third molars, are the last permanent teeth to erupt, usually between the age of 18 and 21 years. However, they do not always erupt properly when they decide to make an appearance. It's wise to get an early opinion from your dentist on getting wisdom teeth pulled before they become impacted, causing pain, swelling, infection, cavities, or gum disease.
          </p>
          <img src={image2} alt='image2'></img>
         
          <p>
            After extraction of the wisdom tooth, the amount of discomfort will depend on how easy the removal of the tooth was. There is usually some swelling and discomfort for a few days afterward, and it is important to follow your doctor’s advice about mouthwashes, painkillers, antibiotics, etc., to help with the healing. It is best to stay fairly quiet and relaxed and avoid smoking and drinking for 24 hours afterward to make sure there are no bleeding problems. There may be some stitches to help the gum heal over – your dentist will probably want to see you again about a week later to check on the healing and to remove any stitches.
          </p>
          <p>
          Some times a full mouth x-ray helps to accidentally find more than one extra teeth. Other than the wisdom teeth being locked inside the bone. These teeth need to be removed by surgery.
          </p>
         <h3>Impacted tooth with pathology</h3> 
         <img src={image1} alt='image1'></img>
        </div>
     
      </section>

      {/* Teeth Removal Procedure Section */}
      <section >
        <div >
          <h3>Teeth Removal Procedure</h3>
          <p>
            Teeth removal is most often done under local anesthesia. If the teeth are deeply impacted or if more than one tooth needs to be removed, it is wise to do the surgery under general anesthesia with a hospital stay of half a day or one day. This method significantly reduces pain, swelling, and dental anxiety.
          </p>
        </div>
       
      </section>

      {/* Other Maxillofacial Surgeries Section */}
      <section  >
        <div >
          <h3>Other Maxillofacial Surgeries</h3>
          <ul>
            <li>Orthognathic Surgeries for Jaw Deformities</li>
            <li>Cyst Enucleation</li>
            <li>Laser Surgery for SubMucous Fibrosis</li>
            <li>TM Joint Surgeries</li>
            <li>Fracture Jaw Fixation Surgeries</li>
          </ul>
          <img src={image3} alt='image3'></img>
        </div>
        
      </section>

    </div>
  );
};

export default Service3;
