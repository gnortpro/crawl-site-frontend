import React from 'react';

import cx from 'classnames';
import { CustomIcon } from 'component/customIcon';
import { Tooltip } from 'component/tooltip';
import theme from 'theme';

import styles from './styles';

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  tooltip?: string | React.ReactElement;
  size?: 's' | 'm';
  label?: string | React.ReactElement;
  labelDimension?: 'left' | 'right';
}

export const Switch = React.forwardRef<HTMLInputElement, Props>(
  ({ label, labelDimension = 'right', className, tooltip, size = 'm', ...props }, ref) => {
    return (
      <div className={cx('switch', className, size)}>
        <label>
          {label && labelDimension === 'left' && <span className="text-sm mr-1">{label}</span>}
          <input type="checkbox" ref={ref} {...props} />
          <div className="slider" />
          {label && labelDimension === 'right' && <span className="text-sm ml-1">{label}</span>}
          {tooltip && (
            <Tooltip className="" content={tooltip} placement="right">
              <CustomIcon type="information" color={theme.color.ink[300]} mode="fill" size="s" />
            </Tooltip>
          )}
        </label>

        <style jsx>{styles}</style>
      </div>
    );
  }
);
