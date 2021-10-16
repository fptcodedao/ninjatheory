import React, { lazy, Suspense, useEffect } from 'react';
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import history from './routerHistory';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { ROUTE } from './configs/constants';
import AOS from 'aos';

import './styles/preloader.scss';
import './styles/app.scss';
import 'aos/dist/aos.css';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import { provider } from 'web3-core';
import { ModalListener } from './components/Commons/Modals/ModalListener';

const Home = lazy(() => import('./views/Home/index'))
const About = lazy(() => import('./views/About/index'))
// const Opportunities = lazy(() => import('./views/Careers/Opportunities'))
// const LifeAtNinja = lazy(() => import('./views/Careers/LifeAtNinja'))
// const LifeInCambridge = lazy(() => import('./views/Careers/LifeInCambridge'))
const Games = lazy(() => import('./views/Games/index'))
const CandidatePrivacyPolicy = lazy(() => import('./views/CandidatePrivacyPolicy/index'))
const DmcaPolicy = lazy(() => import('./views/DmcaPolicy/index'))
const PreSale = lazy(() => import('./views/PreSale/index'))

function App() {
  useEffect(() => {
    AOS.init({
      duration : 400
    })
  });
  function getLibrary(provider: provider) {
    return new Web3(provider)
  }
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
      <Router history={history}>
        <Suspense fallback={
          <div className="preloader-overlay">
            <div id="js-preloader" className="preloader">
              <div className="preloader-inner fadeInUp">
                <div className="pong-loader" />
                <svg role="img" className="df-icon df-icon--preloader-arcade">
                  <use xlinkHref="/preloader.svg#preloader"/>
                </svg>
              </div>
            </div>
          </div>
        }>
          <Header />
          <div className="main transition-all duration-500 flex flex-col pt-85 lg:pt-105 min-h-screen">
            <Switch>
              <Route path={ROUTE.HOME} exact>
                <Home />
              </Route>
              <Route path={ROUTE.ABOUT}>
                <About />
              </Route>
              {/* <Route path="/careers">
                <Careers>
                  <Route path="/careers/opportunities">
                    <Opportunities />
                  </Route>
                  <Route path="/careers/life-at-ninja">
                    <LifeAtNinja />
                  </Route>
                  <Route path="/careers/life-in-cambridge">
                    <LifeInCambridge />
                  </Route>
                </Careers>
              </Route> */}
              <Route path={ROUTE.PRESALE}>
                <PreSale />
              </Route>
              <Route path={ROUTE.GAMES}>
                <Games />
              </Route>
              <Route path={ROUTE.CandidatePrivacyPolicy}>
                <CandidatePrivacyPolicy />
              </Route>
              <Route path={ROUTE.DmcaPolicy}>
                <DmcaPolicy />
              </Route>
              <Redirect from='*' to={ROUTE.HOME} />
            </Switch>
          </div>
          {
          <Footer />
          }
        </Suspense>
      </Router>
      <ModalListener />
      </Web3ReactProvider>
    </>
  );
}

export default App;
