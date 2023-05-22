import { UseFormSetError } from 'react-hook-form';
import { UserLoginT, UserRegistrationT } from '../../../../../../store';

export const validateUserValue = (
  response: any,
  setError: UseFormSetError<UserLoginT | UserRegistrationT>,
  login: boolean
) => {
  if (!login) {
    if (response.message.includes('email')) {
      setError('email', {
        type: 'custom',
        message: response.message,
      });
    } else if (response.message.includes('номер')) {
      setError('number', {
        type: 'custom',
        message: response.message,
      });
    } else if (response.message.includes('логин')) {
      setError('login', {
        type: 'custom',
        message: response.message,
      });
    } else {
      console.log(response.message);
    }
  } else if (login) {
    if (response.message.includes('email')) {
      setError('email', {
        type: 'custom',
        message: 'почта или номер не найден',
      });
    } else if (response.message.includes('пароль')) {
      setError('password', {
        type: 'custom',
        message: 'неверный пароль',
      });
    } else {
      console.log(response.message);
    }
  }
};
