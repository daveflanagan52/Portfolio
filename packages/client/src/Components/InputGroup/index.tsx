import React, { ReactNode } from 'react';

type InputGroupProps = {
  className?: string,
  children?: ReactNode | ReactNode[],
}

const InputGroup: React.FC<InputGroupProps> = (props: InputGroupProps) => (
  <div className={[props.className || '', 'input-group'].join(' ')}>
    {props.children}
  </div>
);

export default InputGroup;
