import { Link } from 'react-router-dom';
import { links } from '../../Routes/links';
import { H } from '../H/H';
import './CrumbWay.scss';

const CrumbWay: React.FC<{ name?: string }> = ({
  name = false,
}): JSX.Element => {
  return (
    <div className={name ? 'crumbway path' : 'crumbway'}>
      <Link to={links.DISC} className="crumbway__title">
        <H tag="h2">Облачное хранилище</H>
      </Link>
      {name && (
        <div className="crumbway__path">
          <H tag="h2">{name}</H>
        </div>
      )}
    </div>
  );
};
export { CrumbWay };
