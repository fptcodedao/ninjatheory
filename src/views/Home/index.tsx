import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAccount } from '../../actions/accountAction';
import ImportModal from '../../components/Account/ImportModal';
import { modalService } from '../../components/Commons/Modals/ModalListener';
import Slider from '../../components/Slider/Slider';
import { ROUTE } from '../../configs/constants';
import './Home.scss';

interface countDownTimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Home: React.FC = () => {
  const { address, wallet } = useSelector((state: any) => state.account);
  const dispatch = useDispatch();
  const [quantityBnb, setQuantityBnb] = useState(0.001);

  const calculateTimeLeft = (timestamp = 0): countDownTimer => {
    const difference = +new Date(1636304400 * 1000) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const calculateTimeStampLeft = (timestamp = 0) => {
    return +new Date(1636304400 * 1000) - +new Date();
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(1636304400));
  const [timeLeftSaleToken, setTimeLeftSaleToken] = useState(calculateTimeStampLeft(1636311600));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(1636304400));
      setTimeLeftSaleToken(calculateTimeStampLeft(1636311600));
    }, 1000);
  });


  function disconnectAccount() {
    dispatch(clearAccount());
    localStorage.clear();
  }

  function presaleToken(address: any, token: any) {
    if (address) {
      wallet.presaleToken(token);
    }
  };

  async function buyPreSaleToken() {
    await presaleToken(address, quantityBnb * Math.pow(10, 18))
  };

  async function handleClaimAirdrop() {
    if (address) {
      try {
        await wallet.claimAirdrop();
      } catch (e) {
        console.log(e);
      }
    }
  };

  function handleChangeQuantity(e: any) {
    setQuantityBnb(e.target.value);
  }

  function handleAddToken() {
    if (address) {
      try {
        wallet.requestImportToken();
      } catch (e) {
        console.log(e);
      }
    } else {
      modalService.show(ImportModal);
    }
  }

  function openImportModal() {
    modalService.show(ImportModal);
  }
  return (
    <>
      <div className="fixed overflow-hidden inset-0 bg-black">
        <div
          id="home-container"
          className="h-full flex home-wrapper relative z-20 transition-opacity duration-200"
        >
          <div
            className="absolute inset-0 invisible"
            style={{ opacity: 1, visibility: "inherit" }}
          >
            <section
              id="slide"
              className="h-screen fixed inset-0 slide"
            >
              <Slider />
            </section>
          </div>
          <div className="h-full w-full flex flex-col flex-wrap lg:flex-row justify-end lg:justify-between lg:items-center relative z-40">
            <div className="-bg-red-300 w-full flex flex-col flex-wrap lg:flex-row justify-end lg:justify-between lg:items-center relative z-40 outer-wrapper">
              <div className="home-navigation-wrapper block">
                <div className="visible hidden lg:block">
                  <img src={require('../../assets/img/logo/logo.png').default} alt="logo" className="logo" />
                </div>
                <div className="visible hidden lg:block">
                  <nav
                    id="navigation"
                    aria-label="main navigation"
                    className="home-nav"
                  >
                    <ul className="flex nav flex-col items-center group landscapemobile:flex-row landscapemobile:justify-around lg:flex-row ">
                      <li
                        className="transition-all transform ease-in-out duration-500 my-6 opacity-0 -translate-y-full blur delay-nav-out-1 delay-nav-out-1 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100">
                        <span>
                          <Link
                            to="/about/"
                            className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 block  lg:font-black lg:text-14 leading-none lg:uppercase"
                          >
                            <span tabIndex={-1} className="kb-focus flex">

                              About
                            </span>
                          </Link>
                        </span>
                      </li>
                      <li
                        className="transition-all transform ease-in-out duration-500 my-6 opacity-0 -translate-y-full blur delay-nav-out-2 delay-nav-out-2 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100">
                        <span>
                          <Link
                            to={ROUTE.PRESALE}
                            className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 block  lg:font-black lg:text-14 leading-none lg:uppercase"
                          >
                            <span tabIndex={-1} className="kb-focus flex">

                              Presale
                            </span>
                          </Link>
                        </span>
                      </li>
                      <li
                        className="transition-all transform ease-in-out duration-500 my-6 opacity-0 -translate-y-full blur delay-nav-out-3 delay-nav-out-3 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100">
                        <span>
                          <Link
                            to="/games/"
                            className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 block  lg:font-black lg:text-14 leading-none lg:uppercase"
                          >
                            <span tabIndex={-1} className="kb-focus flex">

                              Games
                            </span>
                          </Link>
                        </span>
                      </li>
                      <li
                        className="transition-all transform ease-in-out duration-500 my-6 opacity-0 -translate-y-full blur delay-nav-out-3 delay-nav-out-3 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100">
                        <span>
                          <a
                            href="https://docs.zombielife.games"
                            className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 block  lg:font-black lg:text-14 leading-none lg:uppercase"
                          >
                            <span tabIndex={-1} className="kb-focus flex">
                              Docs
                            </span>
                          </a>
                        </span>
                      </li>
                      <li
                        className="transition-all transform ease-in-out duration-500 my-6 opacity-0 -translate-y-full blur delay-nav-out-3 delay-nav-out-3 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100">
                        <span>
                          <button
                            type="button"
                            className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 block  lg:font-black lg:text-14 leading-none lg:uppercase"
                            onClick={handleAddToken}
                          >
                            <span tabIndex={-1} className="kb-focus flex">
                              Add Token
                            </span>
                          </button>
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="mini-carousel-wrapper">
                <div
                  className="invisible"
                  style={{ opacity: 1, visibility: "inherit" }}
                >
                  <div className="carousel-wrapper relative">
                    <div className={timeLeftSaleToken ? 'mini-slide presale' : 'mini-slide'}>
                      {
                        !timeLeft ? (
                          <div
                            className="text-center"
                            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                          >
                            <h2 className="airdrop-title">Airdrop will end later</h2>
                            {/* <div id="countdown">
                              <ul>
                                <li><span id="days">{timeLeft.days}</span>days</li>
                                <li><span id="hours">{timeLeft.hours}</span>Hours</li>
                                <li><span id="minutes">{timeLeft.minutes}</span>Minutes</li>
                                <li><span id="seconds">{timeLeft.seconds}</span>Seconds</li>
                              </ul>
                            </div> */}
                            {
                              address ? (
                                <button className="btn-claim-token" onClick={handleClaimAirdrop}>
                                  Claim Airdrop
                                </button>
                              ) : (
                                <button className="btn-claim-token" onClick={openImportModal}>
                                  Claim Airdrop
                                </button>
                              )
                            }
                          </div>
                        ) : (<></>)
                      }
                      {
                        timeLeftSaleToken ? (
                          <div
                            className="text-center"
                            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                          >
                            <h2 className="airdrop-title presale">Presale Zomebie Life Token</h2>
                            <h3 className="sub-title">1 BNB = 25,000 ZBL</h3>
                            {
                              address ? (
                                <>
                                  <div className="flex mb-4 justify-content-center">
                                    <input type="text" className="w-50 border border-gray-400 p-2 focus:outline-none text-black" value={quantityBnb} onChange={handleChangeQuantity} />
                                    <button type="button" className="rounded-t bg-dark-500 text-white py-2 px-4 block" onClick={buyPreSaleToken}>Buy Token</button>
                                  </div>
                                  <p style={{marginBottom: '10px'}}>Max cap per wallet — 50,000 ZBL tokens (2 BNB) Min buy: 250 ZBL tokens (0.01 BNB)</p>
                                  <button className="rounded-t bg-dark-500 text-white py-2 px-4 my-3 block whitespace-no-wrap" onClick={disconnectAccount}>Disconnect</button>
                                </>
                              ) : (
                                <button className="btn-claim-token" onClick={openImportModal}>
                                  Buy Token
                                </button>
                              )
                            }
                          </div>
                        ) : (<></>)
                      }
                    </div>
                    <div className="mini-slide hidden">
                      <div
                        className="flex items-center -bg-blue-400"
                        style={{ opacity: 0, transform: "translate(0px, 20px)" }}
                      >
                        <div
                          className="invisible text-18 text-shadow md:text-24 lg1:text-36 uppercase text-white font-roboto font-black w-140 md:w-300 lg1:w-350 leading-none lg:text-right pt-1"
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                            visibility: "inherit"
                          }}
                        >
                          Senua’s Saga: Hellblade II – A Saga In The Making
                        </div>
                        <div
                          className="px-4 invisible"
                          style={{
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                            visibility: "inherit"
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 22.5"
                            className="stroke-current text-zombielife w-30 lg:w-40 lg1:w-80"
                          >
                            <rect
                              x="0.75"
                              y="11.25"
                              width="16.5"
                              height="10.5"
                              rx="1.5"
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5px"
                              }}
                            />
                            <path
                              d="M17.25,19.83l5,1.87a.74.74,0,0,0,1-.44.75.75,0,0,0,.05-.26V14.16a.77.77,0,0,0-1-.7l-5,1.87Z"
                              transform="translate(0 -0.75)"
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5px"
                              }}
                            />
                            <line
                              x1="4.5"
                              y1="14.25"
                              x2="12.75"
                              y2="14.25"
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5px"
                              }}
                            />
                            <circle
                              cx="4.5"
                              cy="4.5"
                              r="3.75"
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5px"
                              }}
                            />
                            <circle
                              cx="14.25"
                              cy="5.25"
                              r={3}
                              style={{
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5px"
                              }}
                            />
                          </svg>
                        </div>
                        <div
                          className="invisible"
                          style={{ opacity: 1, visibility: "inherit" }}
                        >
                          <a
                            href="/video/rWoySrKxPlI"
                            className="block button no-focus w-120 md:w-140"
                          >
                            <span tabIndex={-1} className="kb-focus flex">
                              <div className="font-roboto w-full inline-flex items-center justify-center font-black text-12 uppercase border no-focus rounded h-40 px-12 relative button-border border-white md:text-14 md:h-45">
                                <span className="block button-text inset-0">
                                  View
                                </span>
                              </div>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:absolute bottom-0 w-full justify-between items-center mt-5 lg:mt-0 mb-5 md:mb-10">
              <h2
                className="font-roboto font-light md:font-thin text-white leading-tight md:leading-none tracking-tight invisible text-24 -md:text-64 subtitle-not-block text-20 md:text-42 wrapper:text-64"
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <span
                  className="block"
                  style={{
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                    visibility: "inherit"
                  }}
                >
                  We craft life changing art
                </span>
                <span
                  className="block"
                  style={{
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                    visibility: "inherit"
                  }}
                >
                  with game changing tech
                </span>
              </h2>
              <ul className="flex flex-wrap hidden md:flex justify-start">
                <li className="my-1 mr-3">
                  <a
                    href="https://t.me/zombielifeNFT"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Follow Zombielife on Telegram"
                    className="no-focus s-item w-45 h-45 transition-opacity duration-150 hover:opacity-50 border border-solid rounded-full flex justify-center align-center">
                    <span tabIndex={-1} className="kb-focus flex">
                      <img
                        alt="Follow us on Telegram"
                        className="lazy-load-transition block w-15 lazy-load lazy-load-transition-loaded"
                        src={require('../../assets/img/social/iconmonstr-telegram.svg').default}
                      />
                    </span>
                  </a>
                </li>
                <li className="my-1 mr-3">
                  <a
                    href="https://twitter.com/zombielifeNFT"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Follow Zombielife on Twitter"
                    className="no-focus s-item w-45 h-45 transition-opacity duration-150 hover:opacity-50 border border-solid rounded-full flex justify-center align-center">
                    <span tabIndex={-1} className="kb-focus flex">
                      <img
                        alt="Follow us on Twitter"
                        className="lazy-load-transition block w-15 lazy-load lazy-load-transition-loaded"
                        src={require('../../assets/img/social/iconmonstr_twitter.svg').default}
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/**/}
      </div>

    </>
  )
}
export default Home;
