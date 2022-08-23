import React, { useState, memo } from 'react';
import ReactCreatableSelect, { Props as ReactCreableProps } from 'react-select/creatable';

import { ReactSelectOption } from 'model';
import { reactSelectMap } from 'utils';

import { SelectBasicProps } from '../basic';
import { COMPONENTS } from '../consts';
import { styles } from '../styles';

const CHIP_INPUT_COMPS = {
  ...COMPONENTS,
  DropdownIndicator: null,
};

interface Props {
  inputTransform?: (oldValue: string, value: string) => string;
}

export type CreatableInputProps = Props & ReactCreableProps<ReactSelectOption, boolean> & SelectBasicProps;

export const Chip = memo<CreatableInputProps>(
  React.forwardRef<ReactCreatableSelect<ReactSelectOption>, CreatableInputProps>(
    ({ placeholder, value, inputTransform, onChange, ...props }, outerRef) => {
      const [inputValue, setInputValue] = useState('');

      const handleInputChange = (value: string) => {
        setInputValue(inputTransform ? inputTransform(inputValue, value) : value);
      };

      const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (!inputValue) return;

        if (event.key === 'Enter' || event.key === 'Tab') {
          const current = (value as ReactSelectOption[]) || [];
          const newValue = reactSelectMap(inputValue);

          setInputValue('');
          event.preventDefault();
          onChange([...current, newValue], { action: 'select-option' } as any);
        }
      };

      return (
        <ReactCreatableSelect
          value={value}
          ref={outerRef}
          styles={styles}
          onChange={onChange}
          inputValue={inputValue}
          onKeyDown={handleKeyDown}
          onInputChange={handleInputChange}
          placeholder={placeholder || 'Type a value then hit "Enter"'}
          components={CHIP_INPUT_COMPS}
          hideSelectedOptions={false}
          menuIsOpen={false}
          isMulti
          {...props}
        />
      );
    }
  )
);
