import React from 'react';

import cx from 'classnames';

import styles from './styles';
import { CustomIcon } from 'base/customIcon';
import { IconType } from 'base/customIcon/consts';
import Spinner, { SpinnerColor, SpinnerSize } from 'base/spinner';

export type ButtonColorType = 'primary' | 'secondary' | 'danger' | 'success';
type SizeType = 's' | 'm' | 'l';

const SPINNER_COLOR_MAP: Record<ButtonColorType, SpinnerColor> = {
  primary: 'dark',
  secondary: 'light',
  danger: 'warning',
  success: 'light',
};

const SPINNER_SIZE_MAP: Record<SizeType, SpinnerSize> = {
  s: 's',
  m: 'm',
  l: 'l',
};

const BUTTON_TYPE_MAP_COLOR: Record<ButtonColorType, string> = {
  primary: 'bg-primary hover:bg-darken-primary text-white',
  secondary:
    'border-gray-200 border hover:border-gray-300 bg-white text-xs font-medium text-gray-700',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
  success: 'bg-green-500 hover:bg-green-600 text-white',
};

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeType;
  loading?: boolean;
  className?: string;
  iconType?: IconType;
  fitWidth?: boolean;
  color?: ButtonColorType;
  iconSide?: 'left' | 'right';
}

const FillBtn: React.FC<Props> = ({
  loading,
  iconType,
  children,
  disabled,
  fitWidth,
  className,
  size = 'm',
  iconSide = 'left',
  color = 'primary',
  ...props
}) => {
  const isLoading = !disabled && loading;

  return (
    <button
      className={cx(
        'fillButton rounded',
        BUTTON_TYPE_MAP_COLOR[color],
        className,
        size,
        {
          loading: isLoading,
          disabled: !!disabled,
          [color]: !disabled && Boolean(color),
        }
      )}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      <span
        className={cx('content', { [`icon-${iconSide}`]: Boolean(iconType) })}
      >
        {!isLoading && iconType && <CustomIcon type={iconType} size={size} />}
        {isLoading && (
          <Spinner
            size={SPINNER_SIZE_MAP[size]}
            color={SPINNER_COLOR_MAP[color]}
          />
        )}
        {children && <span className="text">{children}</span>}
      </span>

      <style jsx>{styles}</style>
      <style jsx>
        {`
          .fillButton {
            min-width: ${fitWidth ? 0 : 80}px;
          }
        `}
      </style>
    </button>
  );
};

export default FillBtn;
