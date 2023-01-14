import { TextItem } from 'components/TextItem';
import { FB, Instagram, Logo, Twitter, YouTube } from 'icons';
import React from 'react';
import style from './style.module.css';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.leftSide}>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Cookie Policy</p>
      </div>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.rightSide}>
        <FB />
        <Twitter />
        <YouTube />
        <Instagram />
      </div>
      <div className={style.poweredBy}>
        <TextItem type="secondary">©2022 All rights reserved. Powered by Atla</TextItem>
      </div>
    </div>
  );
};
