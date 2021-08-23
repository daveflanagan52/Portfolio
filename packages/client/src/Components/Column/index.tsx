import React, { ReactNode } from 'react';

interface ColumnProps {
  className?: string,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  xxl?: number,
  children?: ReactNode | ReactNode[],
}

const Column: React.FC<ColumnProps> = (props: ColumnProps) => (
  <div
    className={[
      props.className || '',
      props.xs ? `col-${props.xs}` : 'col-12',
      props.sm ? `col-sm-${props.sm}` : '',
      props.md ? `col-md-${props.md}` : '',
      props.lg ? `col-lg-${props.lg}` : '',
      props.xl ? `col-xl-${props.xl}` : '',
      props.xxl ? `col-xxl-${props.xxl}` : '',
    ].filter((x) => x.length > 0).join(' ')}
  >
    {props.children}
  </div>
);

export default Column;
