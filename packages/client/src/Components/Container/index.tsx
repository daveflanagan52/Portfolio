import React, { ReactNode } from 'react';

interface ContainerProps {
  fluid?: boolean,
  children: ReactNode | ReactNode[],
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => (
  <div className={props.fluid ? 'container-fluid' : 'container'}>
    {props.children}
  </div>
);

export default Container;
