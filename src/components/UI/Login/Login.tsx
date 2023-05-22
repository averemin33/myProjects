import { Location, useLocation } from 'react-router-dom';
import './style/Login.scss';
import HaveAccount from './Components/HaveAccount';
import { links } from '../../Routes/links';
import { SignIn } from '../../../Pages/SignInUp/Pages/SignIn/SignIn';
import { SignUp } from '../../../Pages/SignInUp/Pages/SingUp/SignUp';

const Login: React.FC = (): JSX.Element => {
  const { pathname }: Location = useLocation();
  const isLogin = pathname.includes(links.LOGIN_ROUTER);

  return (
    <>
      <div className="login">
        <div className={isLogin ? 'login__container' : 'login__container rg'}>
          <div className="login__body">
            <div className="login__title">
              <h2>{isLogin ? 'Вход' : 'Создать аккаунт'}</h2>
            </div>
            {isLogin ? <SignIn /> : <SignUp />}
            <HaveAccount isLogin={isLogin} links={links} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
