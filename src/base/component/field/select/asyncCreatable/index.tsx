import React, { memo, useCallback, useEffect, useRef } from 'react';
import ReactSelect, { ActionMeta, ValueType } from 'react-select';
import ReactAsyncCreatableSelect, { Props as ReactSelectAsyncCreatableProps } from 'react-select/async-creatable';

import { ReactSelectOption } from 'model';

import { SelectAsyncProps } from '../async';
import { MESSAGE, COMPONENTS, getEmptyMessage } from '../consts';
import { styles } from '../styles';

export type SelectAsyncCreatableProps = ReactSelectAsyncCreatableProps<ReactSelectOption, boolean> &
  SelectAsyncProps & {
    createLabel?: string;
  };

export const AsyncCreatable = memo<SelectAsyncCreatableProps>(
  React.forwardRef<ReactSelect, SelectAsyncCreatableProps>(
    ({ emptyOptionMess, createLabel, isError, onChange, menuIsPortal, ...props }, outerRef) => {
      const { isMulti, isDisabled } = props;
      const portalTarget = menuIsPortal ? document.body : null;

      const innerRef = useRef<ReactSelect>();
      const ref = (outerRef as React.MutableRefObject<ReactSelect>) || innerRef;

      const checkCreateValid = (inputValue: string) => Boolean(inputValue && inputValue.trim());

      const formatCreateLabel = useCallback(
        (inputValue: string) => {
          const value = inputValue.trim();
          return `${createLabel || MESSAGE.CREATE} "${value}"`;
        },
        [createLabel]
      );

      const handleChange = (
        selected: ValueType<ReactSelectOption, boolean>,
        actionMeta: ActionMeta<ReactSelectOption>
      ) => {
        const { action } = actionMeta;
        if (onChange) onChange(selected, actionMeta);

        if (action === 'clear') {
          setTimeout(() => {
            ref.current.select.focus();
            ref.current.select.onMenuOpen();
          }, 0);
        }
      };

      useEffect(() => {
        if (isDisabled) ref.current.select.onMenuClose();
      }, [isDisabled, ref]);

      return (
        <ReactAsyncCreatableSelect
          ref={ref as any}
          styles={styles}
          components={COMPONENTS}
          noOptionsMessage={getEmptyMessage(emptyOptionMess, isError)}
          formatCreateLabel={formatCreateLabel}
          isValidNewOption={checkCreateValid}
          menuPortalTarget={portalTarget}
          closeMenuOnSelect={!isMulti}
          blurInputOnSelect={!isMulti}
          hideSelectedOptions={false}
          onChange={handleChange}
          menuPlacement="auto"
          isClearable
          {...props}
        />
      );
    }
  )
);
