import { InputElem, InputPassword } from '../../../../../../components';
import { BodyUpProps } from '../../../../Types/interface';

export default function Body({ register, errors, getValues }: BodyUpProps) {
  return (
    <div className="singUp__body">
      <InputElem
        req={true}
        register={register}
        type="text"
        name="login"
        textFiled="Создайте свой логин"
        errors={errors}
      />
      <InputElem
        req={true}
        register={register}
        type="email"
        name="email"
        textFiled="Создайте свою почту"
        errors={errors}
      />
      <InputElem
        req={true}
        register={register}
        type="tel"
        name="number"
        textFiled="Номер телефона"
        errors={errors}
      />
      <InputPassword
        req={true}
        register={register}
        getValues={getValues}
        type="password"
        name="password"
        textFiled="Пароль"
        errors={errors}
      />
      <InputPassword
        req={true}
        getValues={getValues}
        register={register}
        type="password"
        name="passTwo"
        textFiled="Повторите пароль"
        errors={errors}
        twopass={true}
      />
    </div>
  );
}
