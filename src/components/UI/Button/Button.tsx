import React from 'react';
import './style/Button.scss';
import { ButtonProps } from './Button.conf';
import { Link } from 'react-router-dom';
import { P } from '../P/P';
import { ReactComponent as Arrow } from '../../../img/icons/arrow.svg';

export function Button({ children, valid, name, path = '' }: ButtonProps) {
  return (
    <>
      {valid ? (
        <Link to={path} className={name}>
          {<div className={name + '__text'}>{children}</div>}
        </Link>
      ) : (
        <button type="submit" className={name}>
          <div className={name + '__text'}>{children}</div>
        </button>
      )}
      {/* {arrow && (
        <div className={name + '__arrow'}>
          <Arrow />
        </div>
      )} */}
    </>
  );
}

export function ButtonSecond({ children, name, path = '' }: ButtonProps) {
  return (
    <Link to={path} className={name}>
      {<div className={name + '__text'}>{children}</div>}
      {
        <div className={name + '__arrow'}>
          <p>&rsaquo;</p>
        </div>
      }
    </Link>
  );
}
