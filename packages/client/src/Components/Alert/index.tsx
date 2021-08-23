import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';

enum AlertType {
  Info = 'info',
  Warning = 'warning',
  Error = 'danger',
  Danger = 'danger',
  Success = 'success',
}

interface AlertProps {
  type: AlertType,
  icon: IconProp,
  message: string,
}

const Alert: React.FC<AlertProps> = (props: AlertProps) => (
  <div className={`alert alert-${props.type}`}>
    <FontAwesomeIcon icon={props.icon} className={`me-2 text-bold text-${props.type}`} />
    {props.message}
  </div>
);

export default Alert;
export { AlertType };
