import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type InputGroupIconProps = {
  className?: string,
  icon: IconProp,
}

const InputGroupIcon: React.FC<InputGroupIconProps> = (props: InputGroupIconProps) => (
  <span className={[props.className || '', 'input-group-text'].join(' ')}>
    <FontAwesomeIcon icon={props.icon} />
  </span>
);

export default InputGroupIcon;
