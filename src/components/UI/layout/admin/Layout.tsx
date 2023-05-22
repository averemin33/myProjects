import { LayoutProps } from './LayoutProps.config';
import { FunctionComponent } from 'react';
import './Layout.scss';
import { Footer, Header } from '../../..';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="layoutWrapper">
      <Header />
      <div className="layoutWrapper__body">{children}</div>
      <Footer />
    </div>
  );
};

export const layoutHOK = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function Wraper(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
