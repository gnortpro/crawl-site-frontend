import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducer';
import { actions } from './slice';
import { SideBarItem } from './item';
import { MENU_LIST } from './menuList.const';
import { SideBarGroup } from './group';
import cx from 'classnames';
import { CustomIcon } from 'base/customIcon';

export const SideBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toggleCollapse, setCollapse } = actions;
  const { pathname } = router;

  const navDrawerReducer = useSelector(
    (state: RootState) => state.navDrawerReducer
  );

  const { isCollapsed } = navDrawerReducer;

  const onOpenCloseSideBar = () => {
    dispatch(toggleCollapse());
  };

  const setSidebarExpanded = () => {
    dispatch(setCollapse(false));
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 opacity-0 pointer-events-none"
        aria-hidden="true"
      />
      <div
        id="sidebar"
        className="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out -translate-x-64"
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            className="lg:hidden text-gray-500 hover:text-gray-400"
            aria-controls="sidebar"
            aria-expanded="false"
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          <a aria-current="page" className="block active" href="/">
            <svg width={32} height={32} viewBox="0 0 32 32">
              <defs>
                <linearGradient
                  x1="28.538%"
                  y1="20.229%"
                  x2="100%"
                  y2="108.156%"
                  id="logo-a"
                >
                  <stop stopColor="#A5B4FC" stopOpacity={0} offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="88.638%"
                  y1="29.267%"
                  x2="22.42%"
                  y2="100%"
                  id="logo-b"
                >
                  <stop stopColor="#38BDF8" stopOpacity={0} offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width={32} height={32} rx={16} />
              <path
                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                fill="#4F46E5"
              />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
          </a>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">
              {MENU_LIST.map(({ url, label, icon, type, childs }) => {
                if (type === 'Item') {
                  return (
                    <SideBarItem
                      key={url}
                      url={url}
                      label={label}
                      icon={icon}
                    />
                  );
                }
                if (type === 'Group') {
                  return (
                    <SideBarGroup
                      activeCondition={pathname.includes('ecommerce')}
                      key={url}
                    >
                      {(handleClick, open) => {
                        return (
                          <>
                            <a
                              href="#0"
                              className="block text-gray-200 hover:text-white truncate transition duration-150"
                              onClick={(e) => {
                                e.preventDefault();
                                !isCollapsed
                                  ? handleClick()
                                  : setSidebarExpanded();
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  {icon && <CustomIcon type={icon} />}
                                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                    {label}
                                  </span>
                                </div>
                                <div className="flex shrink-0 ml-2">
                                  <svg
                                    className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 false"
                                    viewBox="0 0 12 12"
                                  >
                                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                  </svg>
                                </div>
                              </div>
                            </a>
                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                              <ul
                                className={cx('pl-9 mt-1', {
                                  hidden: open,
                                })}
                              >
                                {childs.map(({ url, label }) => (
                                  <SideBarItem
                                    key={url}
                                    url={url}
                                    label={label}
                                  />
                                ))}
                              </ul>
                            </div>
                          </>
                        );
                      }}
                    </SideBarGroup>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={onOpenCloseSideBar}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-gray-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
