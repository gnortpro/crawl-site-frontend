import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layouts } from 'layouts';
import { wrapperStore } from 'redux/store';
import Head from 'next/head';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducer';
import { useEffect, useLayoutEffect } from 'react';

type CustomPage = NextPage & {
  requiresAuth?: boolean;
  requiresAdmin?: boolean;
  redirectUnauthenticatedTo?: string;
};

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: CustomPage;
}

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  const navDrawerReducer = useSelector(
    (state: RootState) => state.navDrawerReducer
  );
  const { isCollapsed } = navDrawerReducer;

  useEffect(() => {
    if (!isCollapsed) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [isCollapsed]);

  return (
    <>
      <Head>
        <title>Data Manager App</title>
      </Head>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

const HOCAuth = ({ Component, pageProps, router }: AppProps) => {
  return <MyApp pageProps={pageProps} Component={Component} router={router} />;
};

export default wrapperStore.withRedux(HOCAuth);
