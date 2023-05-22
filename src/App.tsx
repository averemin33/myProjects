import React, { useEffect } from 'react';
import './style/App.scss';
import './style/zero.scss';
import Routers from './components/Routes/Routes';
import { fetchGetUser, useAppDispatch } from './store';

const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const fetching = async () => {
    dispatch(fetchGetUser());
  };

  useEffect(() => {
    window.addEventListener('click', handlerDelegation);
    return function cleanup() {
      window.removeEventListener('click', handlerDelegation);
    };
  }, []);

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <Routers />
    </>
  );
};

export default App;

const handlerDelegation = (e: Event) => {
  const { target } = e;
  if (!(target as HTMLElement)?.closest('.accoutmenu__wrap')) {
    document.querySelector('.accoutmenu__wrap')?.classList.remove('add');
  }
};
