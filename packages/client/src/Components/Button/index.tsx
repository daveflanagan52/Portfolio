import React, { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Link, RouteComponentProps } from 'react-router-dom';

enum ButtonType {
  Primary = 'btn-primary',
  Secondary = 'btn-secondary',
  Success = 'btn-success',
  Danger = 'btn-danger',
  Warning = 'btn-warning',
  Info = 'btn-info',
  Light = 'btn-light',
  Dark = 'btn-dark',
  Link = 'btn-link',
}

type ButtonProps = {
  type: ButtonType,
  className?: string,
  stretched?: boolean,
  small?: boolean,
  text?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  link?: string,
  externalLink?: string,
  icon?: IconProp
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  if (props.externalLink) {
    return (
      <a href={props.externalLink} target="_blank" className={['btn', props.type, props.small ? 'btn-sm' : '', props.stretched ? 'stretched-link' : '', props.className].join(' ')} rel="noreferrer">
        {props.icon && <FontAwesomeIcon icon={props.icon} />}
        {props.text && ` ${props.text}`}
      </a>
    );
  }
  if (props.link) {
    return (
      <Link to={props.link} className={['btn', props.type, props.small ? 'btn-sm' : '', props.stretched ? 'stretched-link' : '', props.className].join(' ')}>
        {props.icon && <FontAwesomeIcon icon={props.icon} />}
        {props.text && ` ${props.text}`}
      </Link>
    );
  }
  return (
    <button type={props.onClick ? 'button' : 'submit'} onClick={props.onClick} className={['btn', props.type, props.stretched ? 'stretched-link' : '', props.className].join(' ')}>
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.text && ` ${props.text}`}
    </button>
  );
};

export default Button;
export { ButtonType };
