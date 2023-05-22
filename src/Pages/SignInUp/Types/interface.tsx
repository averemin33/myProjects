import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { UserLoginT, UserRegistrationT } from '../../../store';

export interface BodySignTypes {
  fetching: (el: any) => void;
  handleSubmit: UseFormHandleSubmit<UserLoginT | UserRegistrationT>;
  loading: boolean;
  btn: string;
  children: React.ReactNode | React.ReactChild;
}

export interface FiledValue {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  select: string;
}

export interface SignInputAll {
  // ? ==================== register:
  register: UseFormRegister<UserLoginT | UserRegistrationT>;
  errors: FieldErrors<UserLoginT | UserRegistrationT>;
}

export type BodyUpProps = Pick<SignInputAll, 'errors'> & {
  // ? ==================== register:
  getValues: UseFormGetValues<UserRegistrationT>;
  register: UseFormRegister<UserRegistrationT>;
};

export interface BodyInProps extends SignInputAll {
  remember: boolean;
  setRemember: (remember: boolean) => void;
}

export interface RememberProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export interface InputFiledTypes<
  TFieldValues extends FieldValues = FieldValues
> {
  errors: FieldErrors<UserLoginT | UserRegistrationT | TFieldValues>;
  type: string;
  textFiled?: string;
  register: UseFormRegister<any>;
  req?: boolean;
  name: string;
  getValues?: UseFormGetValues<UserRegistrationT>;
  twopass?: boolean;
  checkErr?: boolean;
}
