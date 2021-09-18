import React, { lazy, Suspense } from 'react';
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import history from './routerHistory';

const Home = lazy(() => import('./views/Home/index'))

function App() {
  return (
    <>
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
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Redirect from='*' to='/' />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
