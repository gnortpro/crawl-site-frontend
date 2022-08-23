import React, { ReactNode } from 'react';

import cx from 'classnames';

import { Radio, RadioProps } from '../radio';

const DIRECTION = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

export interface RadioOption extends Record<string, any> {
  desc?: string;
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

interface Props extends Omit<RadioProps, 'onChange'> {
  name?: string;
  options: RadioOption[];
  selected?: string | number;
  dir?: keyof typeof DIRECTION;
  onChange?: (selected: string | number) => void;
}

export const RadioGroup = React.forwardRef<HTMLInputElement, Props>(
  ({ className, name, options, selected, onChange, dir = 'vertical', ...props }, ref) => {
    return (
      <div className={cx('radioGroup', className, dir)}>
        {options.map(({ label, value, desc, disabled }) => {
          const checked = selected === value;
          const handleChange = () => onChange && onChange(value);

          return (
            <Radio
              ref={ref}
              name={name}
              desc={desc}
              label={label}
              value={value}
              disabled={disabled}
              key={`radio-${value}`}
              onChange={handleChange}
              {...(!ref && { checked })}
              {...props}
            />
          );
        })}

        <style jsx>
          {`
            .radioGroup {
              display: flex;

              &.vertical {
                flex-direction: column;

                :global(.radio + .radio) {
                  margin-top: 16px;
                }
              }

              &.horizontal {
                flex-direction: row;
                width: 100%;
                & :global(.radio) {
                  margin-right: 48px;
                }
              }

              & :global(.radio) {
                min-width: 72px;
              }
            }
          `}
        </style>
      </div>
    );
  }
);
