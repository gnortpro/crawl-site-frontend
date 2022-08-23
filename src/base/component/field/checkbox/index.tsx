import React, { ReactNode, useEffect, useRef } from 'react';

import cx from 'classnames';
import { CustomIcon } from 'component/customIcon';
import { setupRef } from 'utils';

import styles from './styles';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 's' | 'm';
  label?: ReactNode;
  indeterminate?: boolean;
  disabled?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, indeterminate, disabled, size = 's', ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement>();

    useEffect(() => {
      innerRef.current.indeterminate = Boolean(indeterminate);
    }, [indeterminate, innerRef]);

    return (
      <div className={cx('checkbox', className, size)}>
        <label>
          <input type="checkbox" ref={setupRef(innerRef, ref)} {...props} />

          <div className="checkIcon">
            <CustomIcon className="checked" color="white" size={size} type="checkbox_check" />
            {indeterminate && (
              <CustomIcon className="indeterminate" color="white" size={size} type="checkbox_indeterminate" />
            )}
          </div>

          {label && <span className="label">{label}</span>}
        </label>

        <style jsx>{styles}</style>
      </div>
    );
  }
);
