import { useNavigate } from 'react-router-dom';
import { $, ButtonSecond, links, P } from '../../../components';
import img from '../../../img/Home/Banner/b2.jpg';
import './Banner.scss';
import { useAppSelector } from '../../../store';
import { ReactComponent as Check } from '../../../img/icons/check.svg';

export default function Banner(): JSX.Element {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__row">
          <div className="banner__wrap">
            <BannerImg />
            <BannerArticle />
          </div>
        </div>
      </div>
    </section>
  );
}

const BannerImg: React.FC = (): JSX.Element => {
  const router = useNavigate();
  return (
    <div onClick={() => router(links.DISC)} className="bannerimg load">
      <img src={img} onLoad={(e) => handleImageLoaded(e, img, '.bannerimg')} />
    </div>
  );
};

const BannerArticle = (): JSX.Element => {
  return (
    <div className="bannerarticle">
      <div className="bannerarticle__wrap">
        <div className="bannerarticle__body">
          <div className="bannerarticle__text">
            <P size="m">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              sunt cum dolore ab nostrum quia.
            </P>
          </div>
        </div>
      </div>
    </div>
  );
};

const handleImageLoaded = (
  e: React.SyntheticEvent<HTMLDivElement>,
  item,
  elem: string
) => {
  const target = e.target as HTMLElement;
  $(
    target.closest(elem) as HTMLElement
  ).take().style.backgroundImage = `url(${item})`;

  $(target.closest(elem) as HTMLElement).remove('load');
  target.remove();
};
