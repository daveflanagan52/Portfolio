import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import Card from '../../Components/Card';

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Dave Flanagan | Home</title>
    </Helmet>
    <h2>Welcome!</h2>
    <Card>
      <p>I'm a software engineer currenly living in Joensuu Finland. I have 10+ years experience in the field and enjoy nothing more than writing code.</p>
      <p>Working with languages such as PHP, C# and more recently Javascript &amp; Typescript, I like to experiment with new technologies to see how they differ and what they can offer.</p>
      <p>This website is just a place for me to detail my hobby projects and other related things. Feel free to browse around and get in touch.</p>
    </Card>
  </>
);

export default Home;
