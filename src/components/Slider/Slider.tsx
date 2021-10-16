import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// @ts-ignore
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Slider.scss';

import slider1 from '../../assets/images/00e49ae5-e14c-4bd1-921c-cfec0a41f85e.webp';
import slider2 from '../../assets/images/4a4c2305-ba19-4c57-b82d-6ec8728a3d57.webp';
import slider3 from '../../assets/images/5cc83c99-28ad-484d-9dae-34ceaacdbfb0.webp';
import slider4 from '../../assets/images/06aff071-80fc-44b5-8234-41aaeea6219a.webp';
import slider5 from '../../assets/images/6d4235e0-a822-4bb9-94df-3c733e43145f.webp';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider: React.FC = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2000}
      organicArrows={false}
      className="slides"
      infinite={false}
    >
      <div data-src={slider1} />
      <div data-src={slider2} />
      <div data-src={slider3} />
      <div data-src={slider4} />
      <div data-src={slider5} />
    </AutoplaySlider>
  );
}

export default Slider;