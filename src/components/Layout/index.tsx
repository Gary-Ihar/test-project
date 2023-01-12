import React, { PropsWithChildren } from 'react';
import { BgCircles } from './BgCircles';
import style from './style/style.module.css';

type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export const Layout = ({ children, footer, header }: PropsWithChildren<Props>) => {
  return (
    <div className={style.root}>
      <BgCircles.One />
      <BgCircles.Two />
      <BgCircles.Three />
      <BgCircles.Four />
      <div className={style.header}>{header}asdasd</div>
      <div className={style.content}>{children}</div>
      <div className={style.footer}>{footer}asdasdasd</div>
    </div>
  );
};
