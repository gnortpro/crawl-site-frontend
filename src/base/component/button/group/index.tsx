import React, { useState } from 'react';

import cx from 'classnames';
import { CustomIcon } from 'component/customIcon';
import { IconType, IconModeType, SizeType } from 'component/customIcon/consts';
import { Tooltip } from 'component/tooltip';

export interface ButtonGroupOption {
  tooltip?: React.ReactNode;
  value: any;
  label?: string;
  disabled?: boolean;
  iconType?: IconType;
  iconMode?: IconModeType;
  size?: SizeType;
}

interface Props {
  selected?: any;
  size?: 's' | 'm' | 'l';
  onChange?: (value: any) => void;
  options: ButtonGroupOption[];
  fullWidth?: boolean;
  className?: string;
}

const GroupBtn: React.FC<Props> = ({ options, selected, fullWidth, className, size = 'm', onChange }) => {
  const [state, setState] = useState(selected);
  const selfValue = selected ?? state;

  const handleClick = (value: any) => () => {
    if (value === selfValue) return;
    if (onChange) onChange(value);
    setState(value);
  };

  return (
    <div
      className={cx('relative z-0 inline-flex shadow-sm rounded-md', className, size, {
        fullWidth: !!fullWidth,
      })}>
      {options.map(({ value, label, disabled, tooltip, iconType, iconMode, size: iconSize }, index) => (
        <button
          key={value}
          type="button"
          disabled={disabled}
          onClick={handleClick(value)}
          className={cx(
            'relative inline-flex items-center border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ',
            {
              'px-2 py-1': size === 's',
              'px-4 py-2': size === 'm',
              'px-5 py-3': size === 'l',
              'z-10 outline-none ring-0 ring-blue-600 border-blue-600': selfValue === value,
              'rounded-l-md': index === 0,
              '-ml-px': index !== 0,
              'rounded-r-md': index === options.length - 1,
            }
          )}>
          {iconType && <CustomIcon type={iconType} mode={iconMode} size={iconSize} />}
          {label && <span className="label">{label}</span>}
          {tooltip && (
            <Tooltip content={tooltip} placement="bottom">
              <div />
            </Tooltip>
          )}
        </button>
      ))}
    </div>
  );
};

export default GroupBtn;
