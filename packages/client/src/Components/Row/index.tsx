import React, { ReactNode } from 'react';

interface RowProps {
  className?: string,
  children?: ReactNode | ReactNode[],
}

const Row: React.FC<RowProps> = (props: RowProps) => (
  <div
    className={[
      props.className || '',
      'row',
    ].filter((x) => x.length > 0).join(' ')}
  >
    {props.children}
  </div>
);

export default Row;
