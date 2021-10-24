/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ROUTE } from '../../configs/constants';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTE.HOME;
  const styleLogo = {
    width: '250px',
  }
  return (
    <>
    {!isHomePage ?
      (<footer className="mt-5 md:mt-40 pb-20 md:pb-40">
        <section className="wrapper border-t border-nt-grey-light pt-16">
          <div className="flex flex-wrap flex-col lg:flex-row items-center md:items-start">
            <Link
              to="/"
              className="md:hidden mb-10 nuxt-link-active"
              aria-label="Home"
            >
              <img alt="logo" src={require('../../assets/img/logo/logo.png').default} style={styleLogo} />
            </Link>
            <div className="w-full lg:w-1/4">
              <div className="flex justify-center lg:justify-start pt-3 pb-10">
                <div>
                  <h4 className="font-roboto font-black uppercase text-14 text-zombielife mb-8 hidden md:block text-center lg:text-left">
                    Social
                  </h4>
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
            <div className="lg:w-3/4">
              <nav
                id="footer-navigation"
                aria-label="footer navigation"
                className="border-t border-b hidden md:block border-opacity-0 border-transparent"
              >
                <ul className="md:flex justify-center lg:justify-between items-center flex-wrap px-20-px md:px-0  ">
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
                      to="/candidate-privacy-policy"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        Candidate Privacy Policy
                      </span>
                    </Link>
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
                      href="#"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        Manage Cookies
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="font-roboto text-center lg:text-left text-12 text-nt-grey-medium md:text-14 footer-copy lg:max-w-80">
                <p>© Copyright 2021 Zombie Life Ltd.</p>
                <p>
                  This website is owned and operated by Zombie Life Limited, a
                  company registered in England (Company Registration number 05240956)
                  whose registered office is at The Broadgate Tower Third Floor, 20
                  Primrose Street, London, United Kingdom, EC2A 2RS
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>) : <></> }
    </>
  );
}

export default Footer;