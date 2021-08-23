import React, { ReactNode } from 'react';

interface CardProps {
  headerItems?: ReactNode[],
  footerItems?: ReactNode[],
  children?: ReactNode | ReactNode[],
  className?: string,
  bodyClassName?: string,
  image?: string,
}

const Card: React.FC<CardProps> = (props: CardProps) => (
  <div className={[props.className || '', 'card'].join(' ')}>
    {props.image && <img src={props.image} className="card-img-top" />}
    {props.headerItems && (
      <div className="card-header align-items-center bg-dark text-light">
        {props.headerItems}
      </div>
    )}
    <div className={[props.bodyClassName || '', 'card-body'].join(' ')}>
      {props.children}
    </div>
    {props.footerItems && (
      <div className="card-footer d-flex">
        {props.footerItems}
      </div>
    )}
  </div>
);

export default Card;
