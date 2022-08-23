import React, { memo, useEffect, useRef } from 'react';
import ReactSelect, { ActionMeta, ValueType } from 'react-select';
import ReactAsyncSelect, { Props as ReactSelectAsyncProps } from 'react-select/async';

import { ReactSelectOption } from 'model';

import { SelectBasicProps } from '../basic';
import { COMPONENTS, getEmptyMessage } from '../consts';
import { styles } from '../styles';

export type SelectAsyncProps = ReactSelectAsyncProps<ReactSelectOption, boolean> & SelectBasicProps;

export const Async = memo<SelectAsyncProps>(
  React.forwardRef<ReactSelect, SelectAsyncProps>(
    ({ emptyOptionMess, onChange, isError, menuIsPortal, ...props }, outerRef) => {
      const { isMulti, isDisabled } = props;
      const portalTarget = menuIsPortal ? document.body : null;

      const innerRef = useRef<ReactSelect>();
      const ref = (outerRef as React.MutableRefObject<ReactSelect>) || innerRef;

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
        <ReactAsyncSelect
          ref={ref as any}
          styles={styles}
          components={COMPONENTS}
          noOptionsMessage={getEmptyMessage(emptyOptionMess, isError)}
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
