import React, { useState, useEffect } from 'react';
import './style/inputFiled.scss';
import { ReactComponent as Eye } from '../../../img/icons/eye.svg';
import { ReactComponent as Close } from '../../../img/icons/closeEye.svg';
import InputErrFoot from './components/InputErrFoot';
import { focus, focusinput, renderInput } from './components/inputFocus';
import { Location, useLocation } from 'react-router-dom';
import { valid } from './components/validate';
import { InputFiledTypes } from '../../../Pages/SignInUp/Types/interface';
import { $ } from '../../customeJQ/customeJQ';

export const InputPassword: React.FC<InputFiledTypes> = ({
  type,
  textFiled,
  register,
  req,
  name,
  getValues,
  errors,
  twopass,
}) => {
  const [passSea, setPassSea] = useState(false);
  const { pathname }: Location = useLocation();
  const err: string = errors[name] && (errors[name]?.message || 'Error');

  useEffect(() => {
    renderInput();
  }, []);

  const сoincidence = pathname.includes('registration')
    ? {
        pattern: !twopass ? valid(type) : undefined,
        validate: twopass
          ? (value: string) =>
              (getValues && value == getValues('password')) ||
              'Пароль не совпадает'
          : undefined,
      }
    : null;

  return (
    <div className="inputFiled">
      <div onClick={focusinput} className="inputFiled__background">
        <div className="inputFiled__block">
          <div className="inputFiled__text old all">{textFiled}</div>
          <input
            {...register(name, {
              required: req ? 'Поле должно быть заполнено' : false,
              ...сoincidence,
            })}
            onFocus={focus}
            onBlur={focus}
            type={passSea ? 'text' : type}
          />
          <div
            onClick={() => setPassSea(() => !passSea)}
            className="inputFiled__eye"
          >
            {passSea ? <Close /> : <Eye />}
          </div>
        </div>
      </div>
      <InputErrFoot err={err} />
    </div>
  );
};

export const InputElem: React.FC<InputFiledTypes> = ({
  type,
  textFiled,
  register,
  req,
  name,
  errors,
  checkErr = true,
}) => {
  const err: string = errors[name] && (errors[name]?.message || 'Error');

  useEffect(() => {
    renderInput();
  }, []);

  return (
    <div className="inputFiled">
      <div
        onClick={focusinput}
        className={
          err ? 'inputFiled__background err' : 'inputFiled__background'
        }
      >
        <div className="inputFiled__block">
          <div className="inputFiled__text old all">{textFiled}</div>
          <input
            {...register(name, {
              required: req ? 'Поле должно быть заполнено' : false,
              pattern: valid(type),
            })}
            onFocus={focus}
            onBlur={focus}
            type={type}
          />
        </div>
      </div>
      {checkErr && <InputErrFoot err={err} />}
    </div>
  );
};
