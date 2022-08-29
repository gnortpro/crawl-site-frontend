import React, { FC } from 'react';

interface IProps {
  title: string;
}

export const PageLayout: FC<IProps> = ({ title, children }) => {
  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">{title}</h1>
        </div>
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <ul className="inline-flex flex-wrap text-sm font-medium">
            <li className="after:content-['/'] last:after:hidden after:text-gray-400 after:px-2">
              <a className="text-gray-500 hover:text-indigo-500" href="#0">
                Home
              </a>
            </li>
            <li className="after:content-['/'] last:after:hidden after:text-gray-400 after:px-2">
              <a className="text-gray-500 hover:text-indigo-500" href="#0">
                Settings
              </a>
            </li>
            <li className="after:content-['/'] last:after:hidden after:text-gray-400 after:px-2">
              <a className="text-gray-500 hover:text-indigo-500" href="#0">
                Notifications
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-100">
        {children}
      </div>
    </>
  );
};
