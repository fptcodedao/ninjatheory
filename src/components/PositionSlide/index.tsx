import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Navigation,
  Scrollbar
} from 'swiper';

import 'swiper/swiper.scss';
import './PositionSlide.scss';
import { ROUTE } from '../../configs/constants';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Scrollbar]);

const PositionSlide: React.FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      navigation.nextEl = navigationNextRef.current;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      navigation.prevEl = navigationPrevRef.current;
    }
  };
  return (
    <>
      <div className="w-65 h-full absolute left-0 top-0 z-10 flex justify-start items-center pagination pagination--previous pl-3 wrapper:pl-0">
        <button ref={navigationPrevRef} className="button-prev w-45 h-45 border border-solid rounded-full flex justify-start items-center border-nt-grey-light opacity-50 hover:opacity-100 no-focus">
          <div tabIndex={-1} className="kb-focus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
            <span className="sr-only">Previous Slides</span>
          </div>
        </button>
      </div>
      <Swiper
        slidesPerView={7}
        scrollbar={{ draggable: true, snapOnRelease: true }}
        navigation={{
          prevEl: navigationPrevRef.current ? navigationPrevRef.current : undefined,
          nextEl: navigationNextRef.current ? navigationNextRef.current : undefined,
        }}
        onBeforeInit={onBeforeInit}
        effect="fade"
      >
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={0} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Tech Art
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_techart_35e19de4a6_9acf7bec08.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={100} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey hover:bg-nt-grey-light-alt">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Studio
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_support_3cdb35c8d1_3a2a02dd75.svg"
                    />
                  </div>
                  <div className="text-ninja-theory font-roboto font-black uppercase text-14 md:text-18 positions leading-none">
                    1
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={200} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey hover:bg-nt-grey-light-alt">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Programming
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_engineering_495d540de1_c23f6c617c.svg"
                    />
                  </div>
                  <div className="text-ninja-theory font-roboto font-black uppercase text-14 md:text-18 positions leading-none">
                    2
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={300} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Animation
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_animation_5baaf05ab4.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={400} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Design
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_design_eb7434e409_1bd1ed6adf.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={500} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Art
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_art_44c94be726_269f15df18.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={600} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Production
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_production_3dea8ae501.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={700} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    I.T
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_it_f7a73e087f.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={800} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Audio
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_audio_a87adf24ea_ccd5f29778.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={900} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME}
            className="no-focus block"
          >
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Commercial &amp; Marketing
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_commercial_e6202dc7e8.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="aos-init aos-animate" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-out" data-aos-delay={1000} style={{ marginRight: 49 }}>
          <Link to={ROUTE.HOME} className="no-focus block">
            <span tabIndex={-1} className="kb-focus flex">
              <div className="h-150 w-150 md:w-200 md:h-200 flex items-center p-1 career-category bg-nt-grey">
                <div className="flex flex-col flex-1 h-full justify-between items-center pt-2 pb-1 md:pt-5 md:pb-3">
                  <div className="font-roboto font-black text-white text-12 md:text-14 uppercase px-1 text-center leading-tight md:leading-none">
                    Internships
                  </div>
                  <div className="w-40 md:w-80 my-1 md:my-4">
                    <img
                      alt=""
                      src="https://ninjatheory.azureedge.net/site/site/assets/careers_internships_bf290c6c42.svg"
                    />
                  </div>
                  <div className="font-roboto font-black uppercase text-12 md:text-14 text-nt-grey-light">
                    Register Interest
                  </div>
                </div>
              </div>
            </span>
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className="w-65 h-full absolute right-0 top-0 z-10 flex justify-end items-center pagination pagination--next pr-3 wrapper:pr-0">
        <button ref={navigationNextRef} className="button-next w-45 h-45 border border-solid rounded-full flex justify-center items-center border-nt-grey-light opacity-50 hover:opacity-100 no-focus">
          <span tabIndex={-1} className="kb-focus flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
            <span className="sr-only">Next Slides</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default PositionSlide;