import { links } from '../../../Routes/links';
import { P } from '../../P/P';
import { ReactComponent as User } from '../../../../img/icons/user.svg';
import { useAppDispatch, useAppSelector, userAuth } from '../../../../store';
import { $host } from '../../../../http';
import { Button } from '../../Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const AccountMenu = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const userdata = user.user;
  const lcation = useLocation().pathname;
  const router = useNavigate();

  const handleMouse = (e: React.MouseEvent) => {
    (e.target as HTMLElement)
      ?.closest('.accoutmenu__wrap')
      ?.classList.toggle('add');
  };

  const handleExit = async (e: React.MouseEvent) => {
    localStorage.setItem('tokenFile', '0');
    dispatch(userAuth({}));
    await $host.get('userfile/delete');
    handleMouse(e);
    if (lcation.includes('folder')) router(links.DISC);
  };

  return (
    <div className="accoutmenu">
      <div className="accoutmenu__wrap">
        {user.isAuth ? (
          <>
            <div onClick={handleMouse} className="accoutmenu__user">
              <div className="accoutmenu__login">
                <P size="m">{'login' in userdata && userdata.login}</P>
              </div>
              <div className="accoutmenu__icon">
                <User />
              </div>
            </div>
            <div className="menublock">
              <ul>
                <li onClick={handleExit}>
                  <P size="m">Выход</P>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="accoutmenu__block">
            <Button valid={true} name="btn1" path={links.LOGIN_ROUTER}>
              <P weight="700" size="l">
                Войти
              </P>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
