import React from 'react';

interface LoaderProps {
  show: boolean,
}

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="loader">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
