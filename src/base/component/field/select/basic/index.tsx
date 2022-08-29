import React, { memo, useEffect, useRef } from 'react';
import ReactSelect, { ActionMeta, Props as ReactSelectProps, StylesConfig, ValueType } from 'react-select';

import { InputSize, SIZE } from 'component/field/text';
import { ReactSelectOption } from 'model';
import theme from 'theme';

import { COMPONENTS, getEmptyMessage } from '../consts';
import { styles } from '../styles';

const { color } = theme;

export interface SelectBasicProps extends ReactSelectProps<ReactSelectOption, boolean> {
  emptyOptionMess?: string;
  isInvalid?: boolean;
  isError?: boolean;
  menuIsPortal?: boolean;
  isClearable?: boolean;
  size?: InputSize;
}

export const Basic = memo<SelectBasicProps>(
  React.forwardRef<ReactSelect, SelectBasicProps>(
    ({ emptyOptionMess, onChange, isClearable, size = 'm', isError, menuIsPortal, ...props }, outerRef) => {
      const { isMulti, isDisabled } = props;
      const innerRef = useRef<ReactSelect>();
      const portalTarget = menuIsPortal ? document.body : null;
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

      const controlStyle: StylesConfig<ReactSelectOption, boolean> = {
        control: (base, state) => {
          const { menuIsOpen, isFocused, selectProps } = state;
          const { isInvalid, isDisabled } = selectProps || {};
          const activeColor = (menuIsOpen || isFocused) && color.primary[500];
          const disabledColor = isDisabled && color.border;
          const errorColor = isInvalid && color.red[500];

          return {
            minHeight: SIZE[size],
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 100ms ease 0s',
            boxSizing: 'border-box',
            outline: '0px !important',
            position: 'relative',
            boxShadow: 'none',
            borderWidth: 1,
            borderRadius: 4,
            borderStyle: 'solid',
            lineHeight: 'normal',
            cursor: isDisabled ? 'not-allowed' : 'default',
            color: isDisabled ? color.ink[400] : color.ink[500],
            backgroundColor: isDisabled ? color.ink[200] : 'white',
            borderColor: disabledColor || errorColor || activeColor || color.border,
            caretColor: isInvalid ? color.red[500] : color.primary[500],
            zIndex: state.isFocused ? 1 : 0,
          };
        },
      };

      useEffect(() => {
        if (isDisabled) ref.current.select.onMenuClose();
      }, [isDisabled, ref]);

      return (
        <ReactSelect
          ref={ref}
          styles={{ ...styles, ...controlStyle }}
          components={COMPONENTS}
          noOptionsMessage={getEmptyMessage(emptyOptionMess, isError)}
          menuPortalTarget={portalTarget}
          closeMenuOnSelect={!isMulti}
          blurInputOnSelect={!isMulti}
          hideSelectedOptions={false}
          onChange={handleChange}
          menuPlacement="auto"
          isClearable={isClearable}
          {...props}
        />
      );
    }
  )
);
