/* eslint-disable */
import React from 'react';
import {
  components,
  ControlProps,
  IndicatorProps,
  InputProps,
  MenuListComponentProps,
  OptionProps,
  SingleValueProps,
} from 'react-select';
import { NoticeProps } from 'react-select/src/components/Menu';
import { MultiValueGenericProps, MultiValueRemoveProps } from 'react-select/src/components/MultiValue';
import { LoadingIndicatorProps } from 'react-select/src/components/indicators';
import { FixedSizeList as List } from 'react-window';

import { CustomIcon } from 'component/components/customIcon';
import Spinner from 'component/components/spinner';
import { ReactSelectOption } from 'model';
import { nanoid } from 'nanoid';
import theme from 'theme';

import { Field } from '..';

const MENU_HEIGHT = 35;

const OptionIcon: React.FC<ReactSelectOption['icon']> = ({ type, mode, color }) => {
  if (!type) return null;
  return <CustomIcon type={type} mode={mode} className="optionIcon" color={color || theme.color.ink[400]} />;
};

export const Input = ({ type, ...rest }: any) => <components.Input className="customSearchInput" {...rest} />;

// export const Control: React.FC<ControlProps<any, boolean>> = ({ children, ...rest }) => {
//   return (
//     <components.Control className="form-select" {...rest}>
//       {children}
//     </components.Control>
//   );
// };

export const DropdownIndicator: React.FC<IndicatorProps<any, boolean>> = props => {
  const { selectProps } = props;
  const { isLoading } = selectProps;
  const showArrow = !isLoading;

  return (
    showArrow && (
      <components.DropdownIndicator className="dropdownIcon" {...props}>
        <CustomIcon type="drop_down" size="s" mode="fill" />
      </components.DropdownIndicator>
    )
  );
};

export const ClearIndicator: React.FC<IndicatorProps<any, boolean>> = props => {
  const { selectProps } = props;
  const { isLoading, isDisabled } = selectProps;
  const showClear = !isLoading && !isDisabled;

  return (
    showClear && (
      <components.ClearIndicator className="removeBtn" {...props}>
        <CustomIcon type="close_circle" size="s" mode="fill" />
      </components.ClearIndicator>
    )
  );
};

export const LoadingIndicator: React.FC<LoadingIndicatorProps<any, boolean>> = props => {
  const { selectProps } = props;
  const { isLoading, isDisabled } = selectProps;
  const showLoading = !isDisabled && isLoading;

  return (
    showLoading && (
      <div className="loadingSpinner">
        <Spinner size="m" />

        <style jsx>
          {`
            .loadingSpinner {
              line-height: 0;
              padding-right: 6px;
            }
          `}
        </style>
      </div>
    )
  );
};

export const LoadingMessage: React.FC<NoticeProps<any, boolean>> = props => {
  return (
    <components.LoadingMessage {...props}>
      <Spinner />
    </components.LoadingMessage>
  );
};

export const Option: React.FC<OptionProps<any, boolean>> = props => {
  const { label, data, isMulti, isSelected, innerProps } = props;
  const { icon, desc } = (data as ReactSelectOption) || {};

  const isCreateOption = data.__isNew__;
  const handleCheck = () => {};

  // override to remove onMouseMove(), onMouseOver()
  const newProps = {
    ...props,
    innerProps: {
      ...innerProps,
      onMouseMove: () => {},
      onMouseOver: () => {},
    },
  };

  return (
    <components.Option className="option" {...newProps}>
      {isMulti && !isCreateOption && <Field.Checkbox id={nanoid()} checked={isSelected} onChange={handleCheck} />}
      {icon && <OptionIcon {...icon} />}

      <span className="optionContent" title={label}>
        <div className="label textTruncate">{label}</div>
        {desc && <div className="desc textTruncate">{desc}</div>}

        <style jsx>
          {`
            .optionContent {
              margin-left: 8px;
              overflow: hidden;

              .desc {
                margin-top: 2px;
                color: ${theme.color.ink[400]};
                ${theme.typo.T12_R}
              }

              &:first-child {
                margin-left: 0;
              }
            }
          `}
        </style>
      </span>
    </components.Option>
  );
};

export const SingleValue: React.FC<SingleValueProps<ReactSelectOption>> = props => {
  const { children, data } = props;
  const { icon, image } = data || {};

  return (
    <components.SingleValue {...props}>
      {icon && (
        <div className="mr-1">
          <OptionIcon {...icon} />
        </div>
      )}
      <span className="label">{children}</span>
    </components.SingleValue>
  );
};

export const MultiValueContainer: React.FC<MultiValueGenericProps<ReactSelectOption>> = props => {
  const { children, data } = props;
  const { icon, image } = data || {};

  return (
    <components.MultiValueContainer {...props}>
      {icon && <OptionIcon {...icon} />}
      {children}
    </components.MultiValueContainer>
  );
};

export const MultiValueLabel: React.FC<MultiValueGenericProps<any>> = props => {
  const { children } = props;

  return (
    <components.MultiValueLabel {...props}>
      <div title={String(children)}>
        {children}
        <style jsx>
          {`
            div {
              max-width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          `}
        </style>
      </div>
    </components.MultiValueLabel>
  );
};

export const MultiValueRemove: React.FC<MultiValueRemoveProps<any>> = props => {
  const { selectProps } = props;
  const { isDisabled } = selectProps;

  return (
    !isDisabled && (
      <components.MultiValueRemove {...props}>
        <CustomIcon type="close_mark" size="s" />
      </components.MultiValueRemove>
    )
  );
};

export const MenuList: React.FC<MenuListComponentProps<any, boolean>> = props => {
  const { options, children, maxHeight, getValue } = props;
  const childrens = children as ReactSelectOption[];
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * MENU_HEIGHT;

  return (
    <List
      itemCount={childrens.length}
      height={maxHeight}
      itemSize={MENU_HEIGHT}
      width="100%"
      initialScrollOffset={initialOffset}>
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
};
