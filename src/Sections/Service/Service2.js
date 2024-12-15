import React from 'react';
import './Service1.css'; // Optional CSS file for styling the page
import image1 from "../../Image/pulp exposure.jpg";
import image2 from "../../Image/missing tooth.png";
import image3 from "../../Image/Steps.jpg";
import image4 from "../../Image/rct-2.jpg";
import { useLocation } from 'react-router-dom'; // To track route changes



const Service2 = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page loads
  }, [location]);

  return (
    <div className="service-page">
      <h1 className="service-title">Saving Decayed Tooth</h1>
      <h2 className="service-subtitle">Saving Teeth Through Root Canal Treatment</h2>

      <section>
        <h3>What is root canal treatment?</h3>
        <p>
          The procedure involves removing inflamed or damaged tissue from inside a tooth and cleaning, filling, and sealing the remaining space.
        </p>
      </section>

      <section>
        <h3>Why do I need it?</h3>
        <p>
          The pulp, or soft inner tissue of your tooth, is normally surrounded and protected by a layer of dentin. Above the gumline, the dentin is protected by a layer of enamel; below the gumline, the dentin is covered by cementum. When a deep cavity, decay, or crack destroys these protective layers, the pulp is exposed to the bacteria in your mouth. This can result in inflammation, infection, and, eventually, necrosis (pulp death). A severe blow to the tooth can also damage the pulp. Irritants may then escape from the end of the root and cause a diseased area (apical lesion) in the bone.
        </p>
        <p>
          Root canal treatment removes the damaged pulp and irritants. This allows the bone surrounding the root end to repair and heal.
        </p>
        <img src={image1} alt='image1'></img>
      </section>

      <section>
        <h3>Couldn't I just have the tooth removed?</h3>
        <p>
          You could, but then adjoining teeth may shift and interfere with biting and chewing. You can have a replacement tooth implanted or attached to adjacent healthy teeth, but this can be expensive and require even more dental treatment. There is no real substitute for your own tooth, which is more efficient in chewing and biting than an artificial one would be.
        </p>
        <img src={image2} alt='image2'></img>
      </section>

      <section>
        <h3>How much does root canal treatment cost?</h3>
        <p>
          The cost of root canal treatment depends on the severity of your problem, as well as the tooth location and number and shape of canals. Additionally, fees vary depending upon the educational experience of the practitioner. Please ask for a cost estimate before treatment begins.
        </p>
      </section>

      <section>
        <h3>What happens during root canal treatment?</h3>
        <p>An examination, including radiographs, will be performed. A local anesthetic will be given, if necessary. Complete treatment consists of the following five basic steps:</p>
        <ul>
          <li><strong>Step 1:</strong> An opening is made in the crown of the tooth.</li>
          <li><strong>Step 2:</strong> The pulp is removed from the pulp chamber and root canals. Tiny instruments (?files?) are used to clean the root canals and shape them to a form that will ensure they will be well sealed. A temporary filling is placed in the opening to seal the opening and protect the tooth between visits.</li>
          <li><strong>Step 3:</strong> The root canals are filled and sealed with a material that prevents bacteria from re-entering. The opening in the crown of the tooth is sealed with a temporary filling. Radiographs (x-rays) are made before, during, and after treatment.</li>
          <li><strong>Step 4:</strong> At future appointments, which may be in another department, the temporary filling will be replaced with a permanent filling and/or crown.</li>
          <li><strong>Step 5:</strong> The root canal, permanent filling, and/or crown are evaluated for healing at periodic intervals called recall appointments.</li>
        </ul>
        <img src={image3} alt='image3'></img>
      </section>

      <section>
        <h3>Is this going to hurt?</h3>
        <p>
          With modern techniques and anesthetics, people report that having a root canal treatment is about as unremarkable as having a cavity filled. Should you experience any discomfort, signal the doctor, who will do everything possible to make you comfortable.
        </p>
      </section>

      <section>
        <h3>How long will my tooth last?</h3>
        <p>
          Although the pulp is removed, your tooth remains alive, nourished by surrounding bone and gum tissues. With a permanent restoration, regular brushing and flossing, proper diet, and periodic dental checkups, your tooth has an excellent chance for success.
        </p>
        <p>
          You will be contacted in the future to return for a recall appointment, when the tooth will be radiographed and examined to be sure healing has occurred. There is no charge for this service. A postcard will be sent to remind you to make this appointment.
        </p>
      </section>

      <section>
        <h3>After a Root Canal</h3>
        <p><strong>Soreness:</strong> Most patients experience a little soreness after the appointment. This may be due to the injection, the necessity of keeping the mouth open for a long time, or the treatment. Your temporary filling will be hard enough to bite on within approximately a half-hour, but avoid biting or chewing on the treated tooth if it hurts.</p>
        <p><strong>Pain:</strong> Sometimes pain and swelling may be present after RCT. Remember, if your tooth hurt before you came in for treatment, it may take a while to heal. Take the proper dosage of antibiotics and painkillers as per the doctor's instructions to reduce the pain and swelling slowly.</p>
        <p><strong>Permanent Filling:</strong> When your root canal treatment is complete, a temporary filling is placed. The tooth needs to be permanently restored to prevent contamination or fracture. Every Root Canal Treated tooth must have a crown made either from ceramic or metal-free ceramic material called E-Max.</p>
      
        <img src={image4} alt='image4'></img>
        </section>
    </div>
  );
};

export default Service2;
