import { FieldValues, SubmitHandler } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../../../../img/icons/arrow.svg';
import { BodySignTypes } from '../../../../../Pages/SignInUp/Types/interface';
import { Button } from '../../../Button/Button';
import { P } from '../../../P/P';

import './SignBody.scss';

const SignBody: React.FC<BodySignTypes> = ({
  fetching,
  handleSubmit,
  loading,
  btn,
  children,
}) => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    fetching(data);
  };

  const router: NavigateFunction = useNavigate();

  return (
    <form
      className={loading ? 'signbody load' : 'signbody'}
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
      <div className="signbody__footer">
        <div onClick={() => router(-1)} className="signbody__wrap">
          <div className="signbody__arrow">
            <Arrow />
          </div>
          <Button name="btn2" valid={true}>
            <div className="signbody__text">
              <P size="l">Назад</P>
            </div>
          </Button>
        </div>
        <div className="signbody__btn">
          <Button name="btn1" valid={false}>
            <P size="l" weight="700">
              {btn}
            </P>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignBody;
