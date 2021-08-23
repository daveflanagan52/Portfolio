import React, { ReactNode } from 'react';

import { IPhoto } from '../../Types';
import Card from '../Card';

interface PhotoCardProps {
  photo: IPhoto,
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => (
  <Card
    className="mb-4"
    headerItems={[
      <h6 key="title" className="card-title">{photo.name}</h6>,
    ]}
    bodyClassName="p-0"
  >
    <img src={photo.url} alt={photo.name} className="img-fluid" />
  </Card>
);

export default PhotoCard;
