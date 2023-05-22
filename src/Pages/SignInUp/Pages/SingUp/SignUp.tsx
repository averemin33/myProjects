import './style/SingUp.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Body from './Components/Body/Body';
import {
  fetchRegistUser,
  useAppDispatch,
  useAppSelector,
  UserRegistrationT,
} from '../../../../store';
import SignBody from '../../../../components/UI/Login/Components/SignBody/SignBody';
import { useEffect } from 'react';

export const SignUp: React.FC = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<UserRegistrationT>({ mode: 'onSubmit' });
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth, isLoading } = useAppSelector((store) => store.user);

  const fetching = async (body: UserRegistrationT) => {
    dispatch(fetchRegistUser({ body, setError }));
  };

  useEffect(() => {
    if (isAuth) {
      router('/');
    }
  }, [isAuth]);

  return (
    <SignBody
      loading={isLoading}
      fetching={fetching}
      handleSubmit={handleSubmit}
      btn="Создать"
    >
      <Body register={register} errors={errors} getValues={getValues} />
    </SignBody>
  );
};
