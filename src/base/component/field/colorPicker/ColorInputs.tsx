import React, { memo, useEffect, useState } from 'react';
import { ColorChangeHandler, RGBColor } from 'react-color';
import { isValidHex, simpleCheckForValidColor, toState } from 'react-color/lib/helpers/color';

import { FormItem } from 'component/formItem';

import { Field } from '..';

interface HexInputProps {
  value: string;
  onChange: ColorChangeHandler;
}

const HexInput: React.FC<HexInputProps> = memo(({ value, onChange }) => {
  const [hexcode, setHexcode] = useState(value?.toUpperCase());

  const handleInputBlur = () => {
    if (!isValidHex(hexcode)) {
      setHexcode(value?.toUpperCase());
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newValue = value?.trim()?.toUpperCase();

    setHexcode(newValue);

    if (newValue.length === 7 && isValidHex(newValue)) {
      onChange(toState(newValue), event);
    }
  };

  useEffect(() => {
    setHexcode(value?.toUpperCase());
  }, [value]);

  return (
    <FormItem className="hexInput" label="Hex" gutterSize="none">
      <Field.Text
        placeholder=" "
        isClearable={false}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        value={hexcode}
        size="m"
      />
    </FormItem>
  );
});

interface RGBInputsProps {
  value: RGBColor;
  onChange: ColorChangeHandler;
}

const RGBInputs: React.FC<RGBInputsProps> = memo(({ value, onChange }) => {
  const [rgbValues, setRGBValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newRGBValue = {
      ...rgbValues,
      [name]: Number(value) <= 255 ? Number(value) : 255,
    };

    setRGBValue(newRGBValue);

    if (simpleCheckForValidColor(newRGBValue)) {
      onChange(toState(newRGBValue), event);
    }
  };

  useEffect(() => {
    setRGBValue(value);
  }, [value]);

  return (
    <>
      <FormItem className="rgbInput" label="R" gutterSize="none">
        <Field.Text
          type="number"
          onChange={handleInputChange}
          value={String(rgbValues.r)}
          name="r"
          isClearable={false}
        />
      </FormItem>

      <FormItem className="rgbInput" label="G" gutterSize="none">
        <Field.Text
          type="number"
          onChange={handleInputChange}
          value={String(rgbValues.g)}
          name="g"
          isClearable={false}
        />
      </FormItem>

      <FormItem className="rgbInput" label="B" gutterSize="none">
        <Field.Text
          type="number"
          value={String(rgbValues.b)}
          onChange={handleInputChange}
          name="b"
          isClearable={false}
        />
      </FormItem>
    </>
  );
});

interface ColorInputsProps {
  hex: string;
  rgb: RGBColor;
  onChange: ColorChangeHandler;
}

const ColorInputs: React.FC<ColorInputsProps> = ({ hex, rgb, onChange }) => {
  return (
    <div className="colorInputs">
      <HexInput value={hex} onChange={onChange} />
      <RGBInputs value={rgb} onChange={onChange} />

      <style jsx>{`
        .colorInputs {
          width: 100%;
          display: grid;
          margin-top: 16px;
          grid-column-gap: 8px;
          grid-template-rows: auto;
          grid-template-columns: 2fr repeat(3, 1fr);

          :global(.hexInput) {
            grid-row: 1 / 2;

            :global(input) {
              text-transform: uppercase;
            }
          }

          :global(.rgbInput) {
            grid-row: 1 / 2;
            flex: 0 0 45px;
          }

          :global(.formItem .formLabel) {
            margin-bottom: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(ColorInputs);
