import React, { useRef } from 'react';

import ArrowDown from 'assets/ic_fill_drop_down.svg';
import ArrowUp from 'assets/ic_fill_drop_up.svg';
import cx from 'classnames';
import { isInteger, isNaN } from 'lodash';
import { setupRef } from 'utils';

import { InputSize } from '../text';
import styles from './styles';

const SIZE = {
  m: 32,
  l: 40,
};

type SpinnerModes = 'on' | 'off' | 'hover';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  isInvalid?: boolean;
  integerOnly?: boolean;
  positiveOnly?: boolean;
  spinnerMode?: SpinnerModes;
  inputClass?: string;
}

export const Number = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      onBlur,
      onChange,
      disabled,
      className,
      inputClass,
      maxLength,
      max,
      isInvalid,
      integerOnly,
      positiveOnly,
      placeholder,
      size = 'l',
      spinnerMode = 'hover',
      ...props
    },
    outerRef
  ) => {
    const innerRef = useRef<HTMLInputElement>();

    const propagateChange = (newValue = '') => {
      const nativeInputValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
      const nativeInputValueSetter = nativeInputValue ? nativeInputValue.set : undefined;
      const event = new Event('input', { bubbles: true, cancelable: false });
      const inputElement = innerRef.current;

      if (nativeInputValueSetter) nativeInputValueSetter.call(inputElement, newValue);
      if (innerRef && event) inputElement.dispatchEvent(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(event);
    };

    const handlePaste = (event: React.ClipboardEvent) => {
      const text = event.clipboardData.getData('Text');
      const innerValue = innerRef.current?.value || '';

      if ((innerValue + text).length > maxLength) event.preventDefault();
      if (isNaN(+text)) return event.preventDefault();
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const innerValue = innerRef.current?.value || '';
      let number = +innerValue;

      if (onBlur) onBlur(event);
      if (!innerValue) return;

      if (isNaN(number)) {
        propagateChange(innerValue);
        return;
      }

      if (integerOnly && !isInteger(number)) {
        number = parseInt(innerValue, 10);
      }

      if (positiveOnly && number < 0) {
        number = Math.abs(number);
      }

      propagateChange(String(number));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const innerValue = innerRef.current?.value || '';
      const { key } = event.nativeEvent;

      if (positiveOnly && key === '-') event.preventDefault();
      if (!positiveOnly && key === '-' && innerValue.includes('-')) event.preventDefault();
      if (integerOnly && [',', '.'].includes(key)) event.preventDefault();
      if (innerValue.length >= maxLength && /^\d$/.test(key)) event.preventDefault();
      if (['e', 'E', '+'].includes(key)) event.preventDefault();
    };

    const handleIncrease = () => {
      const number = parseInt(innerRef.current.value, 10) || 0;
      const newValue = String(number + 1);

      if (newValue.length > maxLength) return;
      if (newValue > max) return;
      propagateChange(newValue);
    };

    const handleDecrease = () => {
      const number = parseInt(innerRef.current?.value, 10) || 0;

      if (positiveOnly && number <= 0) return propagateChange('0');
      propagateChange(String(number - 1));
    };

    return (
      <div className={cx('numberField', size, className, { disabled: !!disabled, error: isInvalid })}>
        <input
          type="number"
          disabled={disabled}
          onBlur={handleBlur}
          onPaste={handlePaste}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={setupRef(innerRef, outerRef)}
          placeholder={placeholder || 'Enter number'}
          className={cx('focus:ring-0', inputClass)}
          {...props}
        />

        {!disabled && (
          <div className={cx('numberSpinner', spinnerMode)}>
            <div tabIndex={0} onClick={handleIncrease}>
              <ArrowUp />
            </div>

            <div tabIndex={0} onClick={handleDecrease}>
              <ArrowDown />
            </div>
          </div>
        )}

        <style jsx>{styles}</style>
        <style jsx>
          {`
            .numberField.${size} {
              height: ${SIZE[size]}px;
            }
          `}
        </style>
      </div>
    );
  }
);
