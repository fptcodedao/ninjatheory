import React from "react";

import slider1 from '../../assets/images/00e49ae5-e14c-4bd1-921c-cfec0a41f85e.webp';
import slider2 from '../../assets/images/4a4c2305-ba19-4c57-b82d-6ec8728a3d57.webp';
import slider3 from '../../assets/images/5cc83c99-28ad-484d-9dae-34ceaacdbfb0.webp';
import slider4 from '../../assets/images/06aff071-80fc-44b5-8234-41aaeea6219a.webp';
import slider5 from '../../assets/images/6d4235e0-a822-4bb9-94df-3c733e43145f.webp';
import slider6 from '../../assets/images/a2b4d37d-caeb-4974-84a6-b9589d6f2acc.webp';
import slider7 from '../../assets/images/f86a2ce8-5478-494e-a92c-241a22284486.webp';
import slider8 from '../../assets/images/58b3174d-f15e-4c6e-9848-5897e7502238.webp';
import slider9 from '../../assets/images/a8a1ff31-1875-4dad-86da-4f504ec85e35.webp';
import slider10 from '../../assets/images/c09d103c-be44-4e49-a732-6bd6f233f53c.webp';
import slider11 from '../../assets/images/d3d6500a-20a2-4530-8a85-6438bef1dd9e.webp';
import slider12 from '../../assets/images/56bc2af8-3cb7-44ce-b5aa-26d861fa330b.webp';
import slider13 from '../../assets/images/71c4fe61-48fe-4089-b471-786048d04e80.webp';
import slider14 from '../../assets/images/686b6246-8118-4c03-8fd6-3bd5a6a9321e.webp';
import slider15 from '../../assets/images/d0e0525b-ec89-4461-8e46-5abd0d7c96d2.webp';
import slider16 from '../../assets/images/25db8b7e-430e-4143-807d-5d063b74299c.webp';

const Games: React.FC = () => {
  return (
    <section>
      <div className="px-20-px wrapper:px-0 max-w-wrapper m-auto mb-8 md:mb-20">
        <div className="relative page-title-wrapper overflow-hidden">
          <h1 className="text-ninja-theory gradient-text -invisible uppercase font-roboto font-black leading-none relative  text-55 md:text-127 wrapper:text-200 ">
            Games
          </h1>
        </div>
        {/**/}
      </div>
      <div className="wrapper fade-in">
        <section>
          <div className="flex flex-col max-w-1690 mx-auto">
            <article
              id="game-item-1"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-1"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Senua's Saga : Hellblade II
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-1"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-1"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-1"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    TBA
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto items-end">
            <article
              id="game-item-2"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-2"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Project Mara
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-2"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider2}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-2"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-2"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    TBA
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto">
            <article
              id="game-item-19"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-19"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  The Insight Project
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-19"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider3}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-19"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-19"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    TBA
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto items-end">
            <article
              id="game-item-21"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-21"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Hellblade, Optimised for Xbox Series X|S
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-21"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider4}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-21"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-21"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2021
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto">
            <article
              id="game-item-3"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-3"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Bleeding Edge
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-3"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider5}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-3"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-3"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2020
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto items-end">
            <article
              id="game-item-4"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-4"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  A Star Wars VR SERIES: Vader Immortal Episode I
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-4"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider6}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-4"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-4"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2019
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto">
            <article
              id="game-item-5"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-5"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Nicodemus: Demon of Evanishment
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-5"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-5"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-5"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2018
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto items-end">
            <article
              id="game-item-6"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-6"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Hellblade: Senua's Sacrifice
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-6"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider8}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-6"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-6"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2017
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto">
            <article
              id="game-item-7"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-7"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Dexed
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-7"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider9}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-7"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-7"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2017
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto items-end">
            <article
              id="game-item-8"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-8"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Disney Infinity 3.0
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-8"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider10}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-8"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-8"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2015
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto">
            <article
              id="game-item-9"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-9"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  DmC: Devil May Cry Definitive Edition
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-9"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider11}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-9"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-9"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2015
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto items-end">
            <article
              id="game-item-10"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-10"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Disney Infinity: Marvel Super Heroes
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-10"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider12}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-10"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-10"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2014
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto">
            <article
              id="game-item-11"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-11"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Fightback
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-11"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider13}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-11"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-11"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2013
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto items-end">
            <article
              id="game-item-20"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-20"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  DMC: Devil May Cry
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-20"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider14}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-20"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-20"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2013
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto">
            <article
              id="game-item-12"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-12"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Enslaved: Odyssey to the West
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-12"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider15}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-12"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-12"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2010
                  </span>
                </h3>
              </div>
            </article>
          </div>
          <div className="flex flex-col max-w-1690 mx-auto items-end">
            <article
              id="game-item-13"
              className="md:flex flex-row-reverse justify-between mb-10 md:mb-20 md:max-w-1140 w-full game-item"
            >
              <div className="flex-1 md:max-w-750">
                <h2
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-13"
                  className="--invisible font-roboto font-black text-white uppercase text-18 md:text-30 mb-2 md:mb-3 leading-tight aos-init aos-animate"
                >
                  Heavenly Sword
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-easing="ease-out"
                  data-aos-anchor="#game-item-13"
                  className="--invisible aos-init aos-animate"
                >
                  <div className="md:w-full">
                    <div className="relative overflow-hidden --pb-335/160 pb-745/420 bg-page">
                      <img
                        alt=""
                        className="lazy-load-transition absolute h-full w-full object-cover lazy-load lazy-load-transition-loaded"
                        src={slider16}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-30-p">
                <h3>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-13"
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-14 md:block md:pb-1 aos-init aos-animate"
                  >
                    Released
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-easing="ease-out"
                    data-aos-anchor="#game-item-13"
                    data-aos-delay={100}
                    className="--invisible inline-block font-roboto font-black text-white uppercase text-10 md:text-90 xl:text-150 md:block md:text-nt-grey-light-alt mr-5 md:leading-tight md:tracking-tighter aos-init aos-animate"
                  >
                    2007
                  </span>
                </h3>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
export default Games;