import React from 'react';
import ThreeCicrcle from '@/components/ThreeCircle';
import ImageRevealEffect from '@/components/ImageRevealEffect';
import Slider from '@/components/Slider';

const testimonials = [
  {
    name: 'Julia Cameron',
    title: 'Creative Director, VISA',
    image: `/image3.jpg`,
    quote:
      "It's all good, I was amazed at the quality of the Design. We've seen amazing result already."
  },
  {
    name: 'Mark Jacobs',
    title: 'Tech Lead, Google',
    image: `/image.jpg`,
    quote: 'The rebranding has really helped our business. Definitely worth the investment.'
  },
  {
    name: 'Lisa Bearings',
    title: 'Brand Coordinator, Facebook',
    image: `/image2.jpg`,

    quote: 'The service was excellent. Absolutely wonderfl! A complete redesign did it for us.'
  }
];

export default function Home() {
  return (
    <div>
      {/* <ThreeCicrcle /> */}
      {/* <ImageRevealEffect /> */}
      <Slider testimonials={testimonials} />
    </div>
  );
}
