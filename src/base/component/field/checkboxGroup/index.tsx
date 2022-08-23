import React from 'react';

import cx from 'classnames';
import { ReactSelectOption } from 'model';

import { Checkbox, CheckboxProps } from '../checkbox';

const DIRECTION = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

interface Props extends Omit<CheckboxProps, 'onChange'> {
  name?: string;
  options: ReactSelectOption[];
  selected?: Array<string | number>;
  dir?: keyof typeof DIRECTION;
  onChange?: (selected: Array<string | number>) => void;
  flexWrap?: boolean;
}

export const CheckboxGroup = React.forwardRef<HTMLInputElement, Props>(
  ({ name, options, onChange, selected = [], dir = 'vertical', flexWrap, ...props }, ref) => {
    return (
      <div className={cx('checkboxGroup', dir, { flexWrap: !!flexWrap })}>
        {options.map(({ label, value, disabled }) => {
          const checked = selected.includes(value);
          const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!onChange) return;
            const isChecked = event.target.checked;
            const newValue = isChecked ? [...selected, value] : selected.filter(item => item !== value);
            onChange(newValue);
          };

          return (
            <Checkbox
              ref={ref}
              name={name}
              label={label}
              value={value}
              disabled={disabled}
              onChange={handleChange}
              key={`checkbox-${value}`}
              {...(!ref && { checked })}
              {...props}
            />
          );
        })}

        <style jsx>
          {`
            .checkboxGroup {
              display: flex;
              flex-wrap: nowrap;

              &.vertical {
                flex-direction: column;

                &:not(.wrap) :global(.checkbox + .checkbox) {
                  margin-top: 16px;
                }
              }

              &.horizontal {
                flex-direction: row;
                width: 100%;
              }

              & :global(.checkbox) {
                min-width: 120px;
              }

              &.flexWrap {
                width: 100%;
                height: 100%;
                flex-wrap: wrap;
                margin-bottom: -16px;

                :global(.checkbox) {
                  margin-bottom: 16px;
                }
              }
            }
          `}
        </style>
      </div>
    );
  }
);
