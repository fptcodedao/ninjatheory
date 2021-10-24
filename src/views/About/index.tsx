import React from 'react'

const About: React.FC = () => {
  return (
    <>
      <section>
        <div className="px-20-px wrapper:px-0 max-w-wrapper m-auto mb-8 md:mb-20">
          <div className="relative page-title-wrapper overflow-hidden">
            <h1 className="text-zombielife gradient-text -invisible uppercase font-roboto font-black leading-none relative  text-55 md:text-127 wrapper:text-200 ">
              About
            </h1>
          </div>
          <h2 className="font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight relative _subtitle max-w-220 md:max-w-480 xl:max-w-700 _invisible   text-20 md:text-42 wrapper:text-64 ml-5 -mt-4 md:ml-16 wrapper:ml-29 md:-mt-10 wrapper:-mt-16">
          Journey through the zombie apocalypse
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
                In 2050, an unknown virus is lingering on to this world and spreading terror, as it had mutated to a zombie infectious disease.
                </p>
                <p>
                The survivors in this post-apocalyptic world has banded together to fight against the zombies and to save the little humanity, if any, left in humans.
                </p>
                <p>
                You will be playing as a survivor in this world, killing zombies and upgrading gears throughout your new journey in the somberness.
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
                  src={require('../../assets/images/zomdp.png').default}
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-easing="ease-out"
              className="hidden md:block px-20-px md:px-0 mb-10 aos-init"
            >
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About;