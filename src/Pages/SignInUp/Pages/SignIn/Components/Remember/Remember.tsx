import React from 'react';
import { P } from '../../../../../../components/UI/P/P';
import { RememberProps } from '../../../../Types/interface';
import './style/Remember.scss';

export default function Remember({ checked, ...props }: RememberProps) {
  return (
    <div className={checked ? 'remember active' : 'remember'}>
      <div {...props} className="remember__blockOne">
        <div
          className={
            checked ? 'remember__checkbox active' : 'remember__checkbox'
          }
        >
          <div className="remember__ok"></div>
        </div>
        <div className="remember__text">
          <P size="m">Запомнить</P>
        </div>
      </div>
    </div>
  );
}
