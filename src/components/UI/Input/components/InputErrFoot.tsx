import { P } from '../../P/P';

export default function InputErrFoot({ err }) {
  return (
    <div className="inputFiled__footer">
      <div className="inputFiled__error">
        <P size="l">{err}</P>
      </div>
    </div>
  );
}
