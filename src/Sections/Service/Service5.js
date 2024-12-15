import React from 'react';
import { useLocation } from 'react-router-dom'; // To track route changes
import './Service1.css'; // Optional CSS file for styling
import image1 from "../../Image/S51.jpg"

import image2 from "../../Image/S51.jpg"
import image3 from "../../Image/S51.jpg"

const Service5 = () => {const location = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the page loads
    }, [location]);
    return (
        <div  className="service-page">
            <h1>Cosmetic Dentistry</h1>

            <h2>Ceramic Veneering</h2>
            <p>A veneer is a thin layer of porcelain made to fit over the front surface of a tooth, like a false fingernail fits over a nail.</p>
            <p>Veneers can improve the colour, shape, and position of your teeth. A precise shade of porcelain can be chosen to give the right colour to improve a single discoloured or stained tooth or to lighten front teeth (usually the upper ones). A veneer can make a chipped tooth look intact again. Veneers can also be used to close small gaps when orthodontics (braces) are not suitable. If one tooth is slightly out of position, a veneer can sometimes be fitted to bring it into line with the others.</p>
            <p>Veneers make teeth look natural and healthy. Because they are very thin and are held in place by a special strong adhesive, very little preparation of the tooth is needed.</p>
            <p>A veneer takes at least two visits: the first to prepare the tooth and to match the shade, and the second to fit it. Before bonding it in place, you will be shown the veneer on your tooth to make sure you are happy with it. Bonding a veneer in place is done with a special adhesive, which holds it firmly on the tooth.</p>
            <p>Veneers should last for many years; but they can chip or break, just as your own teeth can. Small chips can be repaired, or a new veneer fitted if necessary.</p>
            <img src={image1} alt='image1'></img>

            <h3>Alternatives to Veneers</h3>
            <p>A natural-coloured filling material can be used for minor repairs to front teeth. This is excellent where the tooth supports the filling, but may not work as well for broken tooth corners. There will always be a joint between the tooth and the filling material. Crowns are used for teeth that need to be strengthened – either because they have broken, been weakened by a very large filling, or have had root canal treatment.</p>

            <h2>Metal-Free Ceramic Crowns</h2>
            <p>Metal Ceramic crowns normally contain a metal core, either non-precious metal or precious Gold-Palladium alloy, over which ceramic is added. These crowns exhibit a colour nearest to the natural tooth of an individual. However, when used for front teeth, they give a bluish tinge near the gum line, which is not esthetic. This drawback can be overcome by replacing them with METAL-FREE CERAMIC CROWNS (E-max™, Empress™), which are devoid of the metal core, thereby improving the crown’s appearance. Recently, Zirconia crowns and bridges with high aesthetics and high strength are available.</p>
            <img src={image2} alt='image2'></img>

            <h2>Teeth Whitening</h2>
            <p>Who does not want a bright, radiant smile?</p>
            <p>Bleaching is a procedure wherein external and internal stains on teeth are removed, thus leaving the teeth several shades lighter.</p>

            <h3>Types of Bleaching</h3>
            <ul>
                <li>
                    <strong>Home bleach:</strong> This is done by patients using bleaching material and a customized tray dispensed by the dentist.
                </li>
                <li>
                    <strong>In-office bleach:</strong> This procedure is done in the dental clinic, using higher concentration bleaching agents.
                </li>
            </ul>
            <img src={image3} alt='image3'></img>

        </div>
    );
};

export default Service5;
