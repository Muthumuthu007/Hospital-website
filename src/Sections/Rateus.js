import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Rateus.css';

const reviews = [
  {
    name: 'Manisha',
    rating: 5,
    feedback:
      'He is an excellent doctor and took great care for my kid. My kid was very comfortable and happy with him which makes her to get the treatment effectively.',
  },
  {
    name: 'Raj Lakshmi',
    rating: 5,
    feedback:
      'Very friendly, approachable, listens to the patients health issues., Good treatment and care. Overall a very good dentist. People with dental issues can visit him undoubtedly',
  },
  {
    name: 'Rohikh',
    rating: 5,
    feedback:
      'Dr. Sreekanth sir wonderful Dr pass 15 years our favorite dental Dr such a great and explaining about the treatment. Excellent doctor for our whole family sir thank u so much for service sir Lakshmi',
  },
  {
    name: 'Yogesh Balaji',
    rating: 5,
    feedback:
      'Simply the best. If you are looking for a family dentist, one stop solution for all. Very friendly, explains the whole process to the patient, very reasonable price. My entire family got treatment from him',
  },
  {
    name: 'Nallathambi',
    rating: 5,
    feedback:
      'I have visited him few times. He is experienced and a friendly dentist. I would love to recommend my family and friends to visit him',
  },
  {
    name: 'VA Shankar',
    rating: 5,
    feedback:
      'I visited Dr recently, he is very friendly and makes the patient comfortable explains the conditions very well. I highly recommend him',
  },
];

function Rateus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container" {...swipeHandlers}>
      <section className="patient-experiences">
        <h2>Patient Experiences</h2>
        <p>We’re so proud to be your preferred dental partner</p>

        <div className="review-slider">
          <button className="slider-button left" onClick={handlePrevious}>
            &lt;
          </button>

          <div className="review-card">
            <h3>{reviews[currentIndex].name}</h3>
            <p className="stars">{'⭐'.repeat(reviews[currentIndex].rating)}</p>
            <p className="feedback">{reviews[currentIndex].feedback}</p>
          </div>

          <button className="slider-button right" onClick={handleNext}>
            &gt;
          </button>
        </div>

        <button className="rate-us" onClick={() => {
          window.location.href =
            'https://www.google.com/search?q=Dr.+Sreekanth+dental+clinic+reviews#reviews';
        }}>
          Rate us
        </button>
      </section>
    </div>
  );
}

export default Rateus;
