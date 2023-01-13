import React from 'react';
import style from './style.module.css';

type Props = {
  children?: React.ReactNode;
};

export const TextItem = function ({ children }: Props) {
  return <div className={style.textItem}>{children}</div>;
};
