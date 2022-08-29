import { useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducer';
import { wrapperStore } from 'redux/store';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { MainLayout } from 'base/layouts';
import { NextPage } from 'next';

import '../../styles/globals.css';

type CustomPage = NextPage & {
  requiresAuth?: boolean;
  requiresAdmin?: boolean;
  redirectUnauthenticatedTo?: string;
};

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: CustomPage;
}

const SafeHydrate = ({ children }) => (
  <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>
);

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  const navDrawerReducer = useSelector((state: RootState) => state.navDrawerReducer);
  const { isCollapsed } = navDrawerReducer;
  const router = useRouter();
  const { pathname } = router;

  console.log('pathname', pathname);

  const PAGE_NOT_LAYOUT = ['login', 'register', 'connect'];

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
      <div id="portal-container" />
      <SafeHydrate>
        {PAGE_NOT_LAYOUT.includes(pathname) ? (
          <Component {...pageProps} />
        ) : (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )}
      </SafeHydrate>
    </>
  );
};

const HOCAuth = ({ Component, pageProps, router }: AppProps) => {
  return <MyApp pageProps={pageProps} Component={Component} router={router} />;
};

export default wrapperStore.withRedux(HOCAuth);
