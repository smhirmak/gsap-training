import React from 'react';
import { gsap } from 'gsap';

// const testimonials = [
//   {
//     name: 'Julia Cameron',
//     title: 'Creative Director, VISA',
//     image: `${require('/image.jpg')}`,
//     quote:
//       "It's all good, I was amazed at the quality of the Design. We've seen amazing result already."
//   },
//   {
//     name: 'Mark Jacobs',
//     title: 'Tech Lead, Google',
//     image: `${require('/image.jpg')}`,
//     quote: 'The rebranding has really helped our business. Definitely worth the investment.'
//   },
//   {
//     name: 'Lisa Bearings',
//     title: 'Brand Coordinator, Facebook',
//     // image: `/image2.jpg`,
//     image: `${require('/image.jpg')}`,
//     quote: 'The service was excellent. Absolutely wonderfl! A complete redesign did it for us.'
//   }
// ];

const Slider: React.FC<{ testimonials: any[] }> = ({ testimonials }) => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="arrows left">
          <span>
            <img src={'/arrow-left.svg'} alt="left arrow" />
          </span>
        </div>

        <div className="inner">
          <div className="t-image">
            <ul>
              <li>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title">{testimonials[0].title}</h4>
                </div>
              </li>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>
              <li>
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="arrows right">
          <span>
            <img src={'/arrow-right.svg'} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
