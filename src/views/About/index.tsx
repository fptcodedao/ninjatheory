import React from 'react'

const About: React.FC = () => {
  return (
    <>
      <section>
        <div className="px-20-px wrapper:px-0 max-w-wrapper m-auto mb-8 md:mb-20">
          <div className="relative page-title-wrapper overflow-hidden">
            <h1 className="text-ninja-theory gradient-text -invisible uppercase font-roboto font-black leading-none relative  text-55 md:text-127 wrapper:text-200 ">
              About
            </h1>
          </div>
          <h2 className="font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight relative _subtitle max-w-220 md:max-w-480 xl:max-w-700 _invisible   text-20 md:text-42 wrapper:text-64 ml-5 -mt-4 md:ml-16 wrapper:ml-29 md:-mt-10 wrapper:-mt-16">
            We craft life changing art with game changing tech
          </h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:max-w-wrapper md:mx-auto md:pl-20-px">
          <div className="px-20-px md:px-0 md:ml-16 xl:ml-29 md:w-44-p">
            <div className="md:max-w-72">
              <div
                className="font-roboto text-14 md:text-14 text-white copy aos-init aos-animate"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-easing="ease-out"
              >
                <p>
                  Our philosophy is simple: to create impactful game experiences made
                  by small, passionate teams with breakthrough technology.
                </p>
                <p>
                  Based in the historic City of Cambridge, with its sandstone colleges
                  and punts pushing down-river, it is in these surroundings that we’ve
                  produced all of our critically acclaimed titles, from the
                  multi-BAFTA winning Hellblade: Senua’s Sacrifice to DmC: Devil May
                  Cry and Bleeding Edge.
                </p>
                <p>
                  Today, as part of Xbox Game Studios, we strive to achieve our
                  mission to craft life changing art with game changing tech across
                  our in-development projects of Senua's Saga: Hellblade 2, Project
                  MARA and The Insight Project.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-56-p md:pr-20-px">
            {/**/}
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              className="md:w-full mb-10 aos-init aos-animate"
            >
              <div className="relative overflow-hidden pb-375/160 md:pb-16/9 bg-nt-grey">
                <img
                  alt=""
                  className="lazy-load-transition lazy-load-transition-loaded absolute h-full w-full object-cover lazy-load"
                  src="https://ninjatheory.azureedge.net/site/site/assets/large_EDIT_V2_00_00_03_13_Still007_d1071686e3.jpg"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              className="hidden md:block px-20-px md:px-0 mb-10 aos-init"
            >
              <div className="flex flex-col md:flex-row mt-10 md:mt-0">
                <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 relative order-2 md:order-1">
                  <a
                    href="/video/IZUBbMkOC2Q"
                    className="relative md:static w-full h-full block"
                    aria-label="play video"
                  >
                    <div className="w-full h-full video-image">
                      <div className="relative overflow-hidden pb-16/9 bg-nt-grey">
                        <img
                          src="https://img.youtube.com/vi/IZUBbMkOC2Q/maxresdefault.jpg"
                          alt=""
                          className="lazy-load-transition lazy-load-transition-loaded absolute h-full w-full object-cover lazy-load"
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
                        style={{ opacity: "0.5", isolation: "isolate" }}
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
                      The Insight Project
                    </div>
                    <a
                      href="/video/IZUBbMkOC2Q"
                      className="button no-focus hidden lg:block w-120 md:w-140"
                      size-class="true"
                    >
                      <span tabIndex={-1} className="kb-focus flex">
                        <div className="font-roboto w-full inline-flex items-center justify-center font-black text-12 uppercase border no-focus rounded h-40 px-12 relative button-border border-white md:text-14 md:h-45">
                          <span className="block button-text inset-0">Play</span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:max-w-wrapper md:mx-auto md:pl-20-px">
          <div className="px-20-px md:px-0 md:ml-16 xl:ml-29 md:w-44-p">
            <div className="md:max-w-72" />
          </div>
          <div className="md:w-56-p md:pt-8 md:pr-20-px">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              className="md:hidden px-20-px md:px-0 mb-10 aos-init aos-animate"
            >
              <div className="flex flex-col md:flex-row mt-10 md:mt-0">
                <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 relative order-2 md:order-1">
                  <a
                    href="/video/IZUBbMkOC2Q"
                    className="relative md:static w-full h-full block"
                    aria-label="play video"
                  >
                    <div className="w-full h-full video-image">
                      <div className="relative overflow-hidden pb-16/9 bg-nt-grey">
                        <img
                          src="https://img.youtube.com/vi/IZUBbMkOC2Q/maxresdefault.jpg"
                          alt=""
                          className="lazy-load-transition lazy-load-transition-loaded absolute h-full w-full object-cover lazy-load"
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
                        style={{ opacity: "0.5", isolation: "isolate" }}
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
                      The Insight Project
                    </div>
                    <a
                      href="/video/IZUBbMkOC2Q"
                      className="button no-focus hidden lg:block w-120 md:w-140"
                      size-class="true"
                    >
                      <span tabIndex={-1} className="kb-focus flex">
                        <div className="font-roboto w-full inline-flex items-center justify-center font-black text-12 uppercase border no-focus rounded h-40 px-12 relative button-border border-white md:text-14 md:h-45">
                          <span className="block button-text inset-0">Play</span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About;