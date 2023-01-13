import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import style from './style.module.css';

type Props = {
  disabled?: boolean;
  onClick?: React.DOMAttributes<HTMLDivElement>['onClick'];
};

export const Button = function ({ disabled, children, onClick }: PropsWithChildren<Props>) {
  const className = classNames(style.btn, {
    [style['btn-disabled']]: disabled,
  });
  return (
    <div className={className} onClick={onClick}>
      {children ?? 'Click'}
    </div>
  );
};
