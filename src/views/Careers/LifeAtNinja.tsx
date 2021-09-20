import React from 'react'
import { Link } from 'react-router-dom';

const LifeAtNinja: React.FC = () => {
  return (
    <>
      <div className="px-20-px md:px-0 md:max-w-1700 md:w-88 md:mx-auto">
        <h2
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-out"
          className="font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight mb-6 md:mb-14 text-24 -md:text-64 subtitle-not-block text-20 md:text-42 wrapper:text-64"
        >
          Life At Ninja
        </h2>
      </div>
      <div className="md:flex md:max-w-1700 md:w-88 md:mx-auto md:mb-20">
        <div className="px-20-px pb-5 mx:pb-0 md:px-0 md:w-2/5">
          <div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              className="md:max-w-80"
            >
              <div className="font-roboto text-14 md:text-14 text-white copy">
                <p>
                  At Ninja Theory we strive for greatness through Excellence,
                  Teamwork and Integrity. Everything we do is in the pursuit of
                  fulfilling our Ninja Values:
                </p>
                <h3>Excellence</h3>
                <p>
                  <strong>Expert</strong> – skill, knowledge and quality of work.
                  <br />
                  <strong>Inventive</strong> – creative problem solving and pushing
                  boundaries.
                  <br />
                  <strong>Driven</strong> – consistent, productive and expanding
                  skills.
                </p>
                <h3>Teamwork</h3>
                <p>
                  <strong>Proactive</strong> – remove barriers to success for
                  yourself and team.
                  <br />
                  <strong>Accountable</strong> – taking responsibility for your work
                  and your teams as one.
                  <br />
                  <strong>Adaptive</strong> – doing what’s needed for the team
                  regardless of your role and remit.
                </p>
                <h3>Integrity</h3>
                <p>
                  <strong>Transparent</strong>– sharing often, openly inviting
                  critique, engaging with peers and inspiring others.
                  <br />
                  <strong>Supportive</strong> – mentoring, knowledge sharing and
                  helping others to achieve success.
                  <br />
                  <strong>Respectful</strong>– holding yourself and others to high
                  standards of behaviour.
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
                data-src="https://ninjatheory.azureedge.net/site/site/assets/careers_lifeatninja_e3_940x530_71152052e3_074feba35c.jpg"
                alt=""
                className="lazy-load-transition absolute h-full w-full object-cover"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="px-20-px md:px-0 mt-10"
          >
            <div className="flex flex-col md:flex-row mt-10 md:mt-0">
              <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 relative order-2 md:order-1">
                <a
                  href="/video/mAHtHXVRjxg"
                  aria-label="play video"
                  className="relative md:static w-full h-full block"
                >
                  <div className="w-full h-full video-image">
                    <div className="relative overflow-hidden pb-16/9 bg-nt-grey">
                      <img
                        data-src="https://img.youtube.com/vi/mAHtHXVRjxg/maxresdefault.jpg"
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45 45"
                    className="absolute absolute-center-center w-60 lg:hidden"
                  >
                    <circle
                      cx="22.5"
                      cy="22.5"
                      r="22.5"
                      style={{ opacity: ".5", isolation: "isolate" }}
                    />
                    <path
                      d="M30.27,22l-13-7.34a.56.56,0,0,0-.56,0,.59.59,0,0,0-.29.48v14.7a.59.59,0,0,0,.29.48.56.56,0,0,0,.56,0l13-7.34a.54.54,0,0,0,.27-.73.51.51,0,0,0-.27-.27Z"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5px"
                    />
                  </svg>
                </a>
              </div>
              <div className="md:flex md:w-1/2 lg:w-2/3 xl:w-3/4 md:pl-3 order-1 md:order-2">
                <div className="flex flex-col md:pt-1">
                  <div className="font-roboto font-bold text-white leading-tight text-16 md:text-18 mb-5 md:mb-3 mt-5 md:mt-0">
                    The Dreadnought Diaries 1 | The Mission
                  </div>
                  <Link
                    to="/video/mAHtHXVRjxg"
                    size-class="true"
                    className="block button no-focus hidden lg:block w-120 md:w-140"
                  >
                    <span tabIndex={-1} className="kb-focus flex">
                      <div className="font-roboto w-full inline-flex items-center justify-center font-black text-12 uppercase border no-focus rounded h-40 px-12 relative button-border border-white md:text-14 md:h-45">
                        <span className="block button-text inset-0">Play</span>
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifeAtNinja;