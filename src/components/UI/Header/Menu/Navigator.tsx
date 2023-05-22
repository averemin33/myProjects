import { Link, useLocation } from 'react-router-dom';
import { links } from '../../../Routes/links';
import { P } from '../../P/P';

export default function Navigator() {
  const path = useLocation().pathname;

  return (
    <div className="navbar">
      <nav className="navbar__wrap">
        <ul className="navbar__block">
          {add.map((item) => {
            return (
              <li className={path == item.path ? 'add' : ''} key={item.path}>
                <Link to={item.path}>
                  <P size="m">{item.name}</P>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

const add = [
  { path: links.HOME_ROUTER, name: 'Главная' },
  { path: links.DISC, name: 'Диск' },
  { path: 'tarif', name: 'Тарифы' },
  { path: 'contacts', name: 'Контакты' },
];
