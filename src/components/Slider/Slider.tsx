import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// @ts-ignore
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Slider.scss';

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
      <div data-src="https://ninjatheory.azureedge.net/site/site/assets/large_home_senua_saga_1_f7461080d7.jpg" />
      <div data-src="https://ninjatheory.azureedge.net/site/site/assets/large_home_senua_saga_2_8b028ea00e.jpg" />
      <div data-src="https://ninjatheory.azureedge.net/site/site/assets/large_home_senua_saga_3_455055d0e8.jpg" />
      <div data-src="https://ninjatheory.azureedge.net/site/site/assets/large_home_mara_1_1153e5eb27.jpg" />
      <div data-src="https://ninjatheory.azureedge.net/site/site/assets/large_home_insight_1_014c579c4d.jpg" />
    </AutoplaySlider>
  );
}

export default Slider;