import React, { useCallback, useEffect, useState } from 'react';
import { toState } from 'react-color/lib/helpers/color';

import cx from 'classnames';
import { CustomIcon } from 'component/customIcon';
import { Popover } from 'component/popover';
import { DEFAULT_COLOR, DEFAULT_BORDER_COLOR_OPTIONS, GLOBAL_COLOR } from 'consts';

import { InputSize } from '../text';
import { ColorIndicator } from './ColorIndicator';
import ColorPickerPanel from './ColorPickerPanel';
import { ColorData } from './model';
import styles from './styles';

interface Props {
  size?: InputSize;
  className?: string;
  value: string;
  invalid?: boolean;
  isShowValue?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isClearable?: boolean;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const inputSizeMap: { [key in InputSize]: string } = {
  m: 'm',
  l: 'l',
};

export const ColorPickerBuilder = React.forwardRef<HTMLInputElement, Props>(({ size = 'm', ...props }, outerRef) => {
  const {
    value,
    onChange,
    onBlur,
    invalid,
    disabled,
    className,
    placeholder,
    isClearable = false,
    isShowValue = true,
  } = props;
  const [color, setColor] = useState<any>(toState(value || {}));
  const [isOpen, setIsOpen] = useState(false);

  const [defaultColor, setDefaultColorValue] = useState(DEFAULT_COLOR.PRIMARY);

  const handleChange = useCallback((newColor: ColorData) => setColor(newColor), []);

  const handleClear = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    if (disabled) return;

    setColor(toState({}));
    setIsOpen(false);
    onChange('');
  };

  const handleOpenPopover = () => {
    if (disabled) return;

    setIsOpen(true);
  };

  const handleClosePopover = () => {
    if (onBlur) onBlur();

    setIsOpen(false);

    if (defaultColor === DEFAULT_COLOR.CUSTOM) {
      onChange(color.hex.toUpperCase());
    } else {
      onChange(defaultColor);
    }
  };

  const onDefaultColorChange = (option: string) => setDefaultColorValue(option);

  useEffect(() => {
    if (defaultColor === DEFAULT_COLOR.CUSTOM) {
      setColor(toState(value || {}));
    } else {
      setColor(toState(GLOBAL_COLOR[defaultColor].toUpperCase()));
    }
  }, [defaultColor, value]);

  return (
    <div
      className={cx(['colorPickerField bg-white', className, inputSizeMap[size]], { isOpen, invalid, disabled })}
      onClick={handleOpenPopover}>
      <Popover.Clean
        placement="left"
        isOpen={isOpen}
        onClose={handleClosePopover}
        anchor={<ColorIndicator color={color.hex} />}>
        <ColorPickerPanel color={color} onColorChange={handleChange} onDefaultColorChange={onDefaultColorChange} />
      </Popover.Clean>

      {isShowValue && (
        <div className="valueContainer">
          {!value && <div className="text-xs text-gray-400">{placeholder || 'Pick a color'}</div>}
          {value && (
            <div className="value">
              {defaultColor !== DEFAULT_COLOR.CUSTOM ? DEFAULT_BORDER_COLOR_OPTIONS[value] : value}
            </div>
          )}
        </div>
      )}

      {isClearable && !disabled && (
        <CustomIcon className="clearButton" type="close_circle" mode="fill" size="s" onClick={handleClear} />
      )}

      <style jsx>{styles}</style>
    </div>
  );
});
