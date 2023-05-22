import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import './style/SingIn.scss';
import { useNavigate } from 'react-router-dom';
import Body from './Components/Body/Body';
import {
  fetchLoginUser,
  useAppDispatch,
  useAppSelector,
  UserLoginT,
} from '../../../../store';
import SignBody from '../../../../components/UI/Login/Components/SignBody/SignBody';
import { $, renderInput } from '../../../../components';
import { log } from 'console';

export const SignIn: React.FC = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm<UserLoginT>({ mode: 'onSubmit' });
  const router = useNavigate();
  const [remember, setRemember] = useState(true);
  const dispatch = useAppDispatch();
  const { isAuth, isLoading } = useAppSelector((store) => store.user);

  const fetching = async (body: UserLoginT) => {
    dispatch(fetchLoginUser({ body, setError }));
  };

  useEffect(() => {
    if (isAuth) {
      router(-1);
    }
  }, [isAuth]);

  useEffect(() => {
    setTimeout(() => {
      renderInput();
    }, 500);
  });

  return (
    <SignBody
      loading={isLoading}
      fetching={fetching}
      handleSubmit={handleSubmit}
      btn="Войти"
    >
      <Body
        register={register}
        errors={errors}
        remember={remember}
        setRemember={setRemember}
      />
    </SignBody>
  );
};
