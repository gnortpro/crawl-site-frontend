import React, { memo } from 'react';

import cx from 'classnames';

import styles from './styles';
import { CustomIcon } from 'base/customIcon';
import { IconType, IconModeType, SizeType } from 'base/customIcon/consts';
import Spinner from 'base/spinner';

const SIZE = {
  s: 24,
  m: 32,
  l: 40,
};
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  size?: 's' | 'm' | 'l';
  className?: string;
  iconType: IconType;
  iconMode?: IconModeType;
  iconSize?: SizeType;
  isIgnoreOutline?: boolean;
  loading?: boolean;
}

const IconBtn: React.FC<Props> = ({
  size = 'm',
  iconType,
  iconMode,
  iconSize,
  className,
  color,
  loading,
  disabled,
  isIgnoreOutline = false,
  ...props
}) => {
  const isLoading = !disabled && loading;

  const loadIcon = iconType && (
    <CustomIcon
      type={iconType}
      mode={iconMode}
      size={iconSize}
      isIgnoreOutline={isIgnoreOutline}
    />
  );

  return (
    <button
      className={cx('iconButton', className, size, {
        loading: isLoading,
        'disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed shadow-none':
          !!disabled,
      })}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading ? <Spinner /> : loadIcon}

      <style jsx>{styles}</style>
      <style jsx>
        {`
          .iconButton {
            color: ${color};

            &:not(:disabled):hover {
              color: ${color};
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .iconButton.${size} {
            width: ${SIZE[size]}px;
            height: ${SIZE[size]}px;
          }
        `}
      </style>
    </button>
  );
};

export default memo(IconBtn);
