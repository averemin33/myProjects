export const valid = (item: string) => {
  const config: any = {};
  if (item == 'email') {
    config.value = /[a-z0-9%^$#_]*@[a-z\-0-9]*\.[a-z]{2,4}/gi;
    config.message = 'Неверный адрес электронной почты';
  }
  if (item == 'tel') {
    config.value = /^\d{9,10}$/gi;
    config.message = 'Неверный номер телефона';
  }
  if (item == 'password') {
    config.value =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;
    config.message =
      'Минимум восемь символов, минимум одна заглавная буква и одна цифра';
  }
  return config;
};
