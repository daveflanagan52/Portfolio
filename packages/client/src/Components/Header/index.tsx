import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faInstagram, faLinkedin, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Card from '../Card';
import Column from '../Column';
import Container from '../Container';
import Row from '../Row';

import img from '../../Resources/me.png';

const Header: React.FC = () => (
  <header>
    <Container>
      <Card>
        <Row className="align-items-center">
          <Column md={6}>
            <div className="d-md-flex text-center">
              <div className="avatar">
                <img src={img} />
              </div>
              <div className="info">
                <h1>Dave Flanagan</h1>
                <ul className="links d-flex justify-content-evenly">
                  <li>
                      <a href="https://github.com/daveflanagan52" target="_blank" rel="nofollow noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                  <li>
                      <a href="https://www.linkedin.com/in/dave-flanagan-81678356/" target="_blank" rel="nofollow noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  <li>
                      <a href="https://www.youtube.com/channel/UCFVNwVZ_-qiPHZtHuv80SsA" target="_blank" rel="nofollow noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                  <li>
                      <a href="https://www.instagram.com/daveflanagan.fi/" target="_blank" rel="nofollow noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </Column>
          <Column md={6}>
            <Row>
              <Column md={6}>
                <strong className="d-block text-muted">Where I work:</strong>
                <a href="https://www.nolwenture.com/" target="_blank" rel="nofollow noreferrer">Nolwenture Oy</a> | <a href="https://www.redkik.com/" target="_blank" rel="nofollow noreferrer">Redkik Oy</a>
              </Column>
              <Column md={6}>
                <strong className="d-block text-muted">Location:</strong>
                Joensuu, FI
              </Column>
            </Row>
          </Column>
        </Row>
      </Card>
    </Container>
    <div className="divider-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="shape-waves"><path className="shape-fill shape-fill-1" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" /></svg></div>
  </header>
);

export default Header;
