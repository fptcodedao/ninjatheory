import React from 'react';
import { Link } from 'react-router-dom';

const LifeInCambridge: React.FC = () => {
  return (
    <>
      <div className="px-20-px md:px-0 md:max-w-1700 md:w-88 md:mx-auto">
        <h2
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-out"
          className="font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight mb-6 md:mb-14 text-24 -md:text-64 subtitle-not-block text-20 md:text-42 wrapper:text-64"
        >
          Life in Cambridge
        </h2>
      </div>
      <div>
        <div className="md:flex md:max-w-1700 md:w-88 md:mx-auto md:mb-20">
          <div className="px-20-px pb-5 mx:pb-0 md:px-0 md:w-2/5">
            <div className="md:pt-8">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-easing="ease-out"
                className="md:max-w-80"
              >
                <div className="font-roboto text-14 md:text-14 text-white copy">
                  <p>
                    We’re incredibly fortunate for our studio to be situated in the
                    historic City of Cambridge. Located just 50 miles from London
                    (it’s just a 50min train ride away), and with easy access to
                    Stansted, Heathrow and Gatwick airports, you can reach us
                    without breaking sweat.
                  </p>
                  <p>
                    The boat race and punting down the River Cam through a
                    collection of College buildings maybe the stereotype but it’s
                    only the tourist veneer of what our hometown has to offer.
                  </p>
                  <p>
                    With its rich history in innovation and world-famous university,
                    Cambridge bestows an international and multi-cultural community,
                    offering all the amenities of a modern British city against the
                    backdrop of picturesque green spaces and Collegiate Gothic
                    architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            data-aos-delay={100}
            className="pb-5 md:pb-0 sm-full md:w-3/5"
          >
            <div>
              <div className="relative overflow-hidden pb-375/160 md:pb-940/530 bg-nt-grey">
                <img
                  src="https://ninjatheory.azureedge.net/site/site/assets/careers_cambridge2_940x530_7dd71dfff2_c5dccaa808.jpg"
                  alt=""
                  className="lazy-load-transition lazy-load-transition-loaded absolute h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:max-w-1700 md:w-88 md:mx-auto md:mb-20 md:flex-row-reverse">
          <div className="px-20-px pb-5 mx:pb-0 md:px-0 md:w-2/5">
            <div className="md:flex md:justify-end md:pt-8">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-easing="ease-out"
                className="md:max-w-80"
              >
                <div className="font-roboto text-14 md:text-14 text-white copy">
                  <p>
                    Cambridge also has a thriving cultural scene. There’s an
                    embarrassment of riches to occupy your leisure time. If you’re
                    feeling high-browed you can indulge yourself in our many
                    theatres, renowned museums and arts festivals. If you want to
                    kick-back, then we’ve got that covered too; catch a gig at the
                    Corn Exchange, pop into one of the city’s eclectic bars or
                    historic watering holes before choosing a fine dining, indie
                    restaurant or street-food dinner.
                  </p>
                  <p>
                    We really don’t feel we need to sell our city, and if you’ve
                    visited Cambridge, you’ll know why. We’re proud to call this
                    place home. We are sure you will too.
                  </p>
                  <p>
                    If you’re interested in joining the Ninja Theory family, please
                    keep an eye on our <Link to="/careers/opportunities">Careers</Link>
                    page.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            data-aos-delay={100}
            className="pb-5 md:pb-0 sm-full md:w-3/5"
          >
            <div>
              <div className="relative overflow-hidden pb-375/160 md:pb-940/530 bg-nt-grey">
                <img
                  src="https://ninjatheory.azureedge.net/site/site/assets/careers_cambridge1_940x530_2645d358b4_1931fff4f7.jpg"
                  alt=""
                  className="lazy-load-transition lazy-load-transition-loaded absolute h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifeInCambridge;