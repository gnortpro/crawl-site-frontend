import React, { ReactNode } from 'react';

import cx from 'classnames';
import { nanoid } from 'nanoid';

import styles from './styles';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  desc?: string;
  size?: 's' | 'm';
  label?: ReactNode;
  onHover?: (value: React.InputHTMLAttributes<HTMLInputElement>['value']) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, desc, size = 's', onHover, ...props }, outerRef) => {
    const id = nanoid();
    const handleOver = () => onHover && onHover(props.value);

    return (
      <div className={cx('radio', size)} onMouseEnter={handleOver}>
        <label>
          <input id={id} type="radio" ref={outerRef} {...props} />
          <div className="icon" />

          {label && <span className="label">{label}</span>}
          {desc && <span className="desc">{desc}</span>}
        </label>

        <style jsx>{styles}</style>
      </div>
    );
  }
);
