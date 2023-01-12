import React from 'react';
import style from './style/style.module.css';

export const BgCircles = {
  One: () => {
    return <div className={style.bgCircle1} />;
  },
  Two: () => {
    return <div className={style.bgCircle2} />;
  },
  Three: () => {
    return <div className={style.bgCircle3} />;
  },
  Four: () => {
    return <div className={style.bgCircle4} />;
  },
};
