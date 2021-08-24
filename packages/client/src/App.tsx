import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import moment from 'moment';
import CookieConsent from "react-cookie-consent";

import './App.scss';

import Column from './Components/Column';
import Container from './Components/Container';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Row from './Components/Row';
import ScrollToTop from './Components/ScrollToTop';

import Home from './Views/Home';
import Photography from './Views/Photography';
import Projects from './Views/Projects';
import Contact from './Views/Contact';
import Privacy from './Views/Privacy';

const App: React.FC = () => (
  <Router>
    <CookieConsent
      disableStyles={true}
      buttonClasses="ms-auto btn btn-primary"
      containerClasses="cookie d-flex align-items-center p-2 bg-dark text-light"
      contentClasses=""
      buttonText="OK"
      buttonWrapperClasses="ms-auto"
    >
      Cookies are used to improve your expierience on this site. To find out more, read the <Link to='/privacy'>Privacy Policy</Link>.
    </CookieConsent>
    <ScrollToTop />
    <Header />
    <Container>
      <Row>
        <Column md={3}>
          <Navigation />
        </Column>
        <Column md={9}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/photography">
              <Photography />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Column>
      </Row>
      <footer className=" d-flex">
        &copy; Copyright {moment().format('YYYY')} Dave Flanagan
        <Link className="ms-auto" to="/privacy">Privacy Policy</Link>
      </footer>
    </Container>
  </Router>
);

export default App;
