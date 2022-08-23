import React, { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, ReactNode, useRef, useState } from 'react';

import cx from 'classnames';
import { CustomIcon } from 'component/customIcon';
import { SizeType as IconSizeType } from 'component/customIcon/consts';
import Spinner from 'component/spinner';
import { setupRef } from 'utils';

import styles from './styles';

export const SIZE = {
  m: 32,
  l: 40,
};

export type InputSize = keyof typeof SIZE;
export type InputType = 'text' | 'email' | 'number' | 'password' | 'url' | 'hidden';

const ICON_SIZE_MAP: Record<InputSize, IconSizeType> = {
  m: 's',
  l: 'm',
};

const KEY_ENTER = 'Enter';

export type InputProps = {
  label?: string;
  type?: InputType;
  size?: InputSize;
  isInvalid?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  isSearchable?: boolean;
  onSearch?: (value?: string) => void;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size' | 'prefix' | 'suffix'>;

export const Text: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = 'text',
      value,
      size = 'l',
      placeholder,
      prefix,
      suffix,
      isLoading,
      isClearable = true,
      isInvalid,
      onChange,
      onSearch,
      disabled,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLInputElement>();
    const [, triggerRender] = useState('');

    const isSearchable = Boolean(onSearch);

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isSearchable) return;
      if (event.key === KEY_ENTER) onSearch(String(innerRef.current?.value));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(event);
      triggerRender(event.target.value);
    };

    const onClear = () => {
      const nativeInputValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
      const nativeInputValueSetter = nativeInputValue ? nativeInputValue.set : undefined;
      const event = new Event('input', { bubbles: true, cancelable: false });
      const inputElement = innerRef.current;
      if (nativeInputValueSetter) nativeInputValueSetter.call(inputElement, '');
      if (innerRef && event) {
        inputElement.dispatchEvent(event);
        inputElement.focus();
      }
    };

    return (
      <div
        className={cx(
          'appearance-none block w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
          'textField',
          size,
          { disabled: !!disabled, error: isInvalid }
        )}>
        {isSearchable && (
          <div className="icon left">
            <CustomIcon size={ICON_SIZE_MAP[size]} type="search_loupe" />
          </div>
        )}

        {!!prefix && <div className="icon left">{prefix}</div>}

        <input
          type={type}
          value={value}
          disabled={disabled}
          readOnly={isLoading}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          ref={setupRef(innerRef, ref)}
          placeholder={placeholder || 'Search'}
          {...props}
        />

        {isClearable && !disabled && !isLoading && innerRef.current?.value && (
          <div className="icon right clear" onClick={onClear}>
            <CustomIcon type="close_circle" size="s" mode="fill" />
          </div>
        )}

        {!disabled && isLoading && (
          <div className="icon right">
            <Spinner size={ICON_SIZE_MAP[size]} />
          </div>
        )}

        {!!suffix && <div className="icon right">{suffix}</div>}

        <style jsx>{styles}</style>
        <style jsx>
          {`
            .textField.${size} {
              height: ${SIZE[size]}px;
            }
          `}
        </style>
      </div>
    );
  }
);
