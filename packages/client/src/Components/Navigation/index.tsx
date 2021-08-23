import React, { ReactNode } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faBoxes, faCamera, faEnvelope, faHome,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Button, { ButtonType } from '../Button';
import img from '../../Resources/me.png';

const Navigation: React.FC = () => (
  <>
    <h2>&nbsp;</h2>
    <ul className="nav nav-pills flex-column mb-4">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/projects" className="nav-link">
          <FontAwesomeIcon icon={faBoxes} className="me-2" />
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/photography" className="nav-link">
          <FontAwesomeIcon icon={faCamera} className="me-2" />
          Photography
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          Contact
        </NavLink>
      </li>
    </ul>
  </>
);

export default Navigation;
