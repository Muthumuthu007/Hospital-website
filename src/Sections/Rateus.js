import React from 'react';
import './Rateus.css';

const reviews = [
  {
    name: 'Manisha',
    rating: 5,
    feedback: 'He is an excellent doctor and took great care for my kid. My kid was very comfortable and happy with him which makes her to get the treatment effectively. Also he gives lots of suggestions for the kids to take care of their teeth. My kid was able to follow his advice on her own. Also my father got artificial teeth from him and gave utmost care for him too. Hence I would suggest to see Dr.Sreekanth for all the kids and also for adults'
  },
  {
    name: 'Raj Lakshmi',
    rating: 5,
    feedback: 'Very friendly, approachable, listens to the patients health issues., Good treatment and care. Overall a very good dentist. People with dental issues can visit him undoubtedly'
  },
  {
    name: 'Rohikh ',
    rating: 5,
    feedback: 'Dr. Sreekanth sir wonderful Dr pass 15 years our favorite dental Dr such a great and explaining about the treatment. Excellent doctor for our whole family sir thank u so much for service sir Lakshmi'
  }
];

function Rateus() {
  const handleRateUsClick = () => {
    // Navigate to a specific section of the Google rating page
    window.location.href = 'https://www.google.com/search?q=Dr.+Sreekanth+dental+clinic+reviews#reviews';
  };

  return (
    <div className="container">
      <section className="patient-experiences">
        <h2>Patient Experiences</h2>
        <p>We’re so proud to be your preferred dental partner</p>

        <div className="reviews">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <h3>{review.name}</h3>
              <p className="stars">{'⭐'.repeat(review.rating)}</p>
              <p className="feedback">{review.feedback}</p>
            </div>
          ))}
        </div>

        <button className="rate-us" onClick={handleRateUsClick}>
          Rate us
        </button>
      </section>
    </div>
  );
}

export default Rateus;
