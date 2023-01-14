import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import style from './style.module.css';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  weight?: 'strong' | 'xStrong';
  type?: 'primary' | 'secondary';
};

export const TextItem = function (props: PropsWithChildren<Props>) {
  const { children, size = 'md', type, weight } = props;
  const className = classNames(style.textItem, {
    [style[size]]: size,
    ...(type && { [style[type]]: type }),
    ...(weight && { [style[weight]]: weight }),
  });
  return <span className={className}>{children}</span>;
};
