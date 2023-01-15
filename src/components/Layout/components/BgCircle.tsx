import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';
import animatedStyle from './animated.module.css';

type Props = {
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  color?: 'white' | 'green';
  animated?: boolean;
};

export const BgCircle = ({ position = 'topLeft', color = 'white', animated = true }: Props) => {
  const className = classNames(style.bgCircle, {
    [style[position]]: position,
    [style[color]]: color,
    [animatedStyle[position]]: animated,
  });
  return <div className={className} />;
};
