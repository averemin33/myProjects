import React from 'react';
import './Footer.scss';
import { FooterProps } from './Footer.conf';
import { P } from '../P/P';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer className="layoutWrapper__footer" {...props}>
      <div className="container">
        <div className="footer">
          <ul className="footer__wrap">
            <li>
              <P size="m">Главная</P>
            </li>
            <li>
              <P size="m">Помошь</P>
            </li>
            <li>
              <P size="m">О нас</P>
            </li>
            <li>
              <P size="m">Вакансии</P>
            </li>
            <li>
              <P size="m">Поддержка</P>
            </li>
            <li>
              <P size="m">© DiscDoodad, 2022</P>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
