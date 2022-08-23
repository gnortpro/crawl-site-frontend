import React, { FC, ReactNode } from 'react';
import { Header } from './header';
import { SideBar } from './sidebar';

interface IProps {
  children: ReactNode;
}

export const Layouts: FC<IProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <SideBar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
