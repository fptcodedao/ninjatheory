import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ROUTE } from '../../configs/constants';

import './scss/Header.scss';

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const location = useLocation();
  const isHomePage = location.pathname === ROUTE.HOME;

  useEffect(() => {
    setShowNavbar(false);
  }, [location]);

  const stylesLogo = {
    width: '120px',
  }

  return (
    <>
      <header className={`fixed header top-0 w-full py-3 z-30 ${isHomePage ? 'home lg:hidden' : 'bg-page'}`}>
        <div className="px-20-px wrapper:px-0 max-w-wrapper m-auto flex bg-gray-500- bg-opacity-50 items-center justify-between relative z-20">
          <Link to="/" aria-label="Home">
            <img alt="logo" src={require('../../assets/img/logo/logo.png').default} style={stylesLogo} />
          </Link>
          <button
            type="button"
            aria-haspopup="true"
            aria-label="Menu"
            aria-controls="navigation"
            className="no-focus burger"
            aria-expanded="true"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <span tabIndex={-1} className="kb-focus flex">
              <div className="ring w-45 h-45 lg:w-65 lg:h-65 border rounded-full flex transition-all ease-in-out duration-200 motion-reduce:transition-none motion-reduce:transform-none relative border-nt-grey-light">
                {
                  (showNavbar) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 140 140"
                      width={140}
                      height={140}
                      className="fill-current stroke-current text-white w-12 h-12 lg:w-17 lg:h-17 transition-w-h ease-in-out duration-100 motion-reduce:transition-none motion-reduce:transform-none absolute-center-center"
                    >
                      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                        <path
                          d="M0.75 23.249L23.25 0.749"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />{" "}
                        <path
                          d="M23.25 23.249L0.75 0.749"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" className="w-45 h-45 lg:w-65 lg:h-65 transition-w-h ease-in-out duration-100 motion-reduce:transition-none motion-reduce:transform-none absolute-center-center"><g><rect fill="#fff" x="25" y="25" width="3" height="3"></rect> <rect fill="#fff" x="37" y="25" width="3" height="3"></rect> <rect fill="#fff" x="31" y="25" width="3" height="3"></rect> <rect fill="#fff" x="25" y="31" width="3" height="3"></rect> <rect fill="#fff" x="37" y="31" width="3" height="3"></rect> <rect fill="#fff" x="31" y="31" width="3" height="3"></rect> <rect fill="#fff" x="25" y="37" width="3" height="3"></rect> <rect fill="#fff" x="37" y="37" width="3" height="3"></rect> <rect fill="#fff" x="31" y="37" width="3" height="3"></rect></g></svg>
                  )
                }
              </div>
            </span>
          </button>
        </div>
        <div className={`${!showNavbar ? '-translate-y-full' : ''} bg-nt-grey transition transform ease-in-out duration-500 py-10 h-full w-full md:h-auto flex md:block flex-col justify-between z-10 fixed top-0`}>
          <nav id="navigation" aria-label="main navigation" className="pt-10 md:pt-0">
            <ul className="flex nav flex-col items-center group landscapemobile:flex-row landscapemobile:justify-around">
              <li
                className="transition-all transform ease-in-out duration-500 my-4 translate-y-0 opacity-100 no-blur delay-nav-in-1 delay-nav-out-1 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100"
                style={{}}
              >
                <span>
                  <NavLink
                    to="/about"
                    className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 block   lg:text-48 no-focus leading-none"
                    activeClassName="text-zombielife"
                    aria-current="page"
                  >
                    <span tabIndex={-1} className="kb-focus flex">

                      About
                    </span>
                  </NavLink>
                </span>
              </li>
              <li
                className="transition-all transform ease-in-out duration-500 my-4 translate-y-0 opacity-100 no-blur delay-nav-in-2 delay-nav-out-2 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100"
                style={{}}
              >
                <span>
                  <NavLink
                    to="/presale"
                    className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 block lg:text-48 no-focus leading-none"
                    activeClassName="text-zombielife"
                  >
                    <span tabIndex={-1} className="kb-focus flex">

                      Presale
                    </span>
                  </NavLink>
                </span>
              </li>
              <li
                className="transition-all transform ease-in-out duration-500 my-3 translate-y-0 opacity-100 no-blur delay-nav-in-3 delay-nav-out-3 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100"
                style={{}}
              >
                <span>
                  <NavLink
                    to="/games/"
                    className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 lg:text-48 block no-focus leading-none"
                    activeClassName="text-zombielife"
                  >
                    <span tabIndex={-1} className="kb-focus flex">

                      Games
                    </span>
                  </NavLink>
                </span>
              </li>
              <li
                className="transition-all transform ease-in-out duration-500 my-3 translate-y-0 opacity-100 no-blur delay-nav-in-3 delay-nav-out-3 lg:delay-nav-out-0 no-blur-lg lg:translate-y-0 lg:opacity-100"
                style={{}}
              >
                <span>
                  <a
                    href="https://docs.zombielife.games"
                    className="text-white font-roboto font-thin  text-28  no-focus transition-opacity duration-150 hover:opacity-50 lg:text-48 block no-focus leading-none"
                  >
                    <span tabIndex={-1} className="kb-focus flex">

                      Documents
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </nav>
          <ul className="flex flex-wrap md:hidden landscapemobile:order-3 justify-center">
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
          <nav
            id="legal-navigation"
            aria-label="legal navigation"
            className="border-t border-b md:hidden landscapemobile:order-2 border-opacity-0 border-transparent"
          >
            <ul className="flex flex-col items-center landscapemobile:flex-row landscapemobile:flex-wrap landscapemobile:justify-around landscapemobile:px-20-px landscapemobile:w-2/3 landscapemobile:mx-auto">
              <li className="py-2 md:py-3 md:mr-3">
                <a
                  href="https://go.microsoft.com/fwlink/?LinkId=521839"
                  className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                >
                  <span tabIndex={-1} className="kb-focus flex">

                    Privacy and Cookies
                  </span>
                </a>
              </li>
              <li className="py-2 md:py-3 md:mr-3">
                <a
                  href="https://www.microsoft.com/trademarks"
                  className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                >
                  <span tabIndex={-1} className="kb-focus flex">

                    Trademarks
                  </span>
                </a>
              </li>
              <li className="py-2 md:py-3 md:mr-3">
                <a
                  href="https://www.microsoft.com/servicesagreement/"
                  className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                >
                  <span tabIndex={-1} className="kb-focus flex">

                    Terms of Use
                  </span>
                </a>
              </li>
              <li className="py-2 md:py-3 md:mr-3">
                <a
                  href="https://www.xbox.com/en-US/Legal/CodeOfConduct"
                  className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                >
                  <span tabIndex={-1} className="kb-focus flex">

                    Code of Conduct
                  </span>
                </a>
              </li>
              <li className="py-2 md:py-3 md:mr-3">
                <Link
                  to="/dmca-policy"
                  className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                >
                  <span tabIndex={-1} className="kb-focus flex">

                    DMCA Policy
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="/about/#"
                  className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                >
                  <span tabIndex={-1} className="kb-focus flex">

                    Manage Cookies
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;