import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Row from '../../Components/Row';
import Column from '../../Components/Column';
import Loader from '../../Components/Loader';

import { useGetPhotosQuery } from '../../Services/Data';
import PhotoCard from '../../Components/PhotoCard';
import Card from '../../Components/Card';

const Photography: React.FC = () => {
  const photos = useGetPhotosQuery(undefined);
  return (
    <>
      <Helmet>
        <title>Dave Flanagan | Photography</title>
      </Helmet>
      <Loader show={photos.isLoading} />
      <h2>Photography</h2>
      <Card className="mb-4">
        <p>Here are a few of my favourite photographs I've taken over the years, you can find more on my instagram account linked above.</p>
        <p>I use a Canon EOS R and DJI Mavic Pro 2 for most of my photos, if you're interested in hiring me as a photographer for an event, please feel free to get in touch.</p>
      </Card>
      <Row>
        {(photos.data || []).map((photo) => <Column md={6}><PhotoCard photo={photo} /></Column>)}
      </Row>
    </>
  );
};

export default Photography;
