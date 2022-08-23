import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import cx from 'classnames';
import { CustomIcon } from 'base/customIcon';
import { IconType } from 'base/customIcon/consts';

interface IProps {
  url: string;
  label: string;
  icon?: IconType;
}

export const SideBarItem: FC<IProps> = ({ icon, label, url }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <li
      className={cx('px-3 py-2 rounded-sm mb-0.5 last:mb-0', {
        'bg-gray-900': pathname === url,
      })}
    >
      <Link href={url}>
        <a
          className={cx(
            'block text-gray-200 truncate transition duration-150 hover:text-gray-200',
            {
              active: pathname === url,
            }
          )}
        >
          {icon && (
            <div className="flex items-center">
              <CustomIcon type={icon} size="m" className="flex-shrink-0 " />
              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                {label}
              </span>
            </div>
          )}
          {!icon && (
            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {label}
            </span>
          )}
        </a>
      </Link>
    </li>
  );
};
