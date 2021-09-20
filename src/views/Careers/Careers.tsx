import React from "react";
import { NavLink } from "react-router-dom";

const Careers: React.FC = ({ children }) => {
  return (
    <section>
      <div id="intoview">
        <div className="px-20-px wrapper:px-0 max-w-wrapper m-auto mb-8 md:mb-20">
          <div className="relative page-title-wrapper overflow-hidden">
            <h1 className="text-ninja-theory gradient-text -invisible uppercase font-roboto font-black leading-none relative  text-55 md:text-127 wrapper:text-200 ">
              Careers
            </h1>
          </div>
          <h2 className="font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight relative _subtitle max-w-220 md:max-w-480 xl:max-w-700 _invisible   text-20 md:text-42 wrapper:text-64 ml-5 -mt-4 md:ml-16 wrapper:ml-29 md:-mt-10 wrapper:-mt-16">
            Find your path
          </h2>
        </div>
        <div id="careers-image" className="max-w-wrapper mx-auto">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-out"
            className="md:w-full aos-init aos-animate"
          >
            <div className="relative overflow-hidden pb-375/160 md:pb-1920/600 bg-nt-grey">
              <img
                alt=""
                className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                src="https://ninjatheory.azureedge.net/site/site/assets/nt_careers_bg_new_531921e1b7_5f9490604e.jpg"
              />
            </div>
          </div>
        </div>
        <div className="mb-5 md:mb-10" />
      </div>
      <div className="sticky bg-page lg:bg-transparent z-10 pt-1 mb-8 md:mb-14 subnav-wrapper pointer-events-none">
        <div className="max-w-570 wrapper:max-w-720 mx-auto pointer-events-auto">
          <div>
            <nav className="border-t- border-b- mb-5 hidden md:block invisible md:visible border-nt-grey-light- border-opacity-100">
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-easing="ease-in"
                className="border-nt-grey-light border-opacity-100 border-t aos-init aos-animate"
              />
              <ul className="flex justify-between items-center flex-wrap px-20-px md:px-0">
                <li
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out-back"
                  data-aos-delay={0}
                  className="py-2 md:py-3 aos-init aos-animate"
                >
                  <NavLink
                    activeClassName="text-ninja-theory"
                    to="/careers/opportunities"
                    aria-current="page"
                    className="text-white font-roboto font-black uppercase text-8 md:text-14 block no-focus transition-opacity hover:opacity-50 duration-150"
                  >
                    <span tabIndex={-1} className="kb-focus flex">

                      Opportunities
                    </span>
                  </NavLink>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out-back"
                  data-aos-delay={100}
                  className="py-2 md:py-3 aos-init aos-animate"
                >
                  <NavLink
                    activeClassName="text-ninja-theory"
                    to="/careers/life-at-ninja"
                    className="text-white font-roboto font-black uppercase text-8 md:text-14 block no-focus transition-opacity hover:opacity-50 duration-150"
                  >
                    <span tabIndex={-1} className="kb-focus flex">

                      Life at Ninja
                    </span>
                  </NavLink>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out-back"
                  data-aos-delay={200}
                  className="py-2 md:py-3 aos-init aos-animate"
                >
                  <NavLink
                    activeClassName="text-ninja-theory"
                    to="/careers/life-in-cambridge"
                    className="text-white font-roboto font-black uppercase text-8 md:text-14 block no-focus transition-opacity hover:opacity-50 duration-150"
                  >
                    <span tabIndex={-1} className="kb-focus flex">

                      Life in Cambridge
                    </span>
                  </NavLink>
                </li>
              </ul>
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                data-aos-easing="ease-in"
                className="border-nt-grey-light border-opacity-100 border-t aos-init aos-animate"
              />
            </nav>
            <div className="wrapper md:hidden md:invisible">
              <div className="relative h-60">
                <div className="bg-page border-nt-grey-light border border-solid rounded-lg left-0 absolute z-30 w-full transition-all duration-500 ease-in-out h-60">
                  <div className="font-roboto font-black uppercase text-14 text-ninja-theory h-60 flex items-center justify-between">
                    <span className="block px-6">opportunities</span>
                    <button className="text-white no-focus h-60 w-60 border-l border-nt-grey border-solid">
                      <span
                        tabIndex={-1}
                        className="kb-focus flex justify-center items-center h-60 w-60"
                      >
                        <span className="sr-only">Toggle careers menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          className="fill-current block w-18"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  {/**/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="careers-child">
        { children }
      </section>
    </section>
  );
}

export default Careers;