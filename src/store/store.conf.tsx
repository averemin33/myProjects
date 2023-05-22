import { UseFormSetError } from 'react-hook-form';

export type UserRegistrationT = {
  id: number;
  email: string;
  password: string;
  number: string;
  login: string;
  role: string;
};

export type UserLoginSliceT = {
  body: UserLoginT | UserRegistrationT;
  setError: UseFormSetError<any>;
};

export type UserLoginT = Pick<UserRegistrationT, 'email' | 'password'>;

export type UserStateT = {
  user: UserRegistrationT | object;
  isAuth: boolean;
  isLoading: boolean;
  isLoadingTwo: boolean;
};

export type ResponseUserT = {
  user: UserLoginT | UserRegistrationT;
  token: string;
  message: string;
};

export type FolderT = {
  id: number;
  name: string;
  files: string;
  diskId: number;
};

export type BodyDiskT = Pick<FolderT, 'id'> & {
  [key: string]: any;
  folders: FolderT[];
};

export type DiskStateT = Pick<UserStateT, 'isLoading'> & {
  body: BodyDiskT | object;
  isLoadingDefault: boolean;
};
