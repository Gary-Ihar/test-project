import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';

type Props = {
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  color?: 'white' | 'green';
};

export const BgCircle = ({ position = 'topLeft', color = 'white' }: Props) => {
  const className = classNames(style.bgCircle, {
    [style[position]]: position,
    [style[color]]: color,
  });
  return <div className={className} />;
};
