import React, { useCallback, useEffect, useState } from 'react';
import { toState } from 'react-color/lib/helpers/color';

import cx from 'classnames';
import { CustomIcon } from 'component/customIcon';
import { Popover } from 'component/popover';

import { InputSize } from '../text';
import { ColorIndicator } from './ColorIndicator';
import ColorPickerPanel from './ColorPickerPanel';
import { ColorData } from './model';
import styles from './styles';

interface Props {
  size?: InputSize;
  value: string;
  invalid?: boolean;
  hideValue?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isClearable?: boolean;
  shouldOpenColorPicker?: boolean;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const inputSizeMap: { [key in InputSize]: string } = {
  m: 'm',
  l: 'l',
};

export const ColorPicker = React.forwardRef<HTMLInputElement, Props>(
  ({ size = 'm', hideValue = false, shouldOpenColorPicker, ...props }, outerRef) => {
    const { value, onChange, onBlur, invalid, disabled, placeholder, isClearable = false } = props;
    const [color, setColor] = useState<ColorData>(toState(value || {}));
    const [isOpen, setIsOpen] = useState(false);

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
      onChange(color.hex.toUpperCase());
    };

    useEffect(() => {
      setColor(toState(value || {}));
    }, [value]);

    useEffect(() => {
      setIsOpen(shouldOpenColorPicker);
    }, [shouldOpenColorPicker]);

    return (
      <div
        className={cx(['colorPickerField', inputSizeMap[size]], { isOpen, invalid, disabled })}
        onClick={handleOpenPopover}>
        <Popover.Clean
          placement="top"
          isOpen={isOpen}
          onClose={handleClosePopover}
          anchor={<ColorIndicator color={color.hex} />}>
          <ColorPickerPanel color={color} onColorChange={handleChange} />
        </Popover.Clean>

        {!hideValue && (
          <div className="valueContainer">
            {!value && <div className="placeholder">{placeholder || 'Pick a color'}</div>}
            {value && <div className="value">{value}</div>}
          </div>
        )}

        {isClearable && !disabled && (
          <CustomIcon className="clearButton" type="close_circle" mode="fill" size="s" onClick={handleClear} />
        )}

        <style jsx>{styles}</style>
      </div>
    );
  }
);
