import React, { PropsWithChildren } from 'react';
import { BgCircle } from './components/BgCircle';
import style from './style.module.css';

type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export const Layout = ({ children, footer, header }: PropsWithChildren<Props>) => {
  return (
    <div className={style.root}>
      <BgCircle position="topLeft" color="white" />
      <BgCircle position="topRight" color="green" />
      <BgCircle position="bottomLeft" color="green" />
      <BgCircle position="bottomRight" color="white" />
      <div className={style.header}>{header}asdasd</div>
      <div className={style.content}>{children}</div>
      <div className={style.footer}>{footer}asdasdasd</div>
    </div>
  );
};
