import React, { useCallback, memo } from 'react';
import { ColorChangeHandler } from 'react-color';
import { Saturation, Hue } from 'react-color/lib/components/common';
import { toState } from 'react-color/lib/helpers/color';

import theme from 'theme';

import { ColorIndicator } from './ColorIndicator';
import ColorInputs from './ColorInputs';
import ColorPointer from './ColorPointer';
import { ColorData } from './model';

interface Props {
  color: ColorData;
  onColorChange: (color: ColorData) => void;
}

const ColorPickerPanel: React.FC<Props> = ({ color, onColorChange }) => {
  const propagateChange: ColorChangeHandler = useCallback(
    value => {
      const newColor = toState(value, (value as any).h) as ColorData;

      onColorChange(newColor);
    },
    [onColorChange]
  );

  return (
    <div className="colorPickerPanel">
      <div className="saturationPicker">
        <Saturation
          onChange={propagateChange}
          pointer={ColorPointer}
          // @ts-ignore
          hsl={color.hsl}
          hsv={color.hsv}
        />
      </div>

      <div className="hueWrapper">
        <div className="huePicker">
          <Hue
            onChange={propagateChange}
            pointer={ColorPointer}
            // @ts-ignore
            hsl={color.hsl}
            radius="50px"
          />
        </div>

        <ColorIndicator color={color.hex} />
      </div>

      <ColorInputs hex={color.hex} rgb={color.rgb} onChange={propagateChange} />

      <style jsx>
        {`
          .colorPickerPanel {
            width: 280px;
            padding: 16px;

            .saturationPicker {
              border: 1px solid ${theme.color.border};
              position: relative;
              border-radius: 4px;
              height: 248px;
              width: 100%;

              > :global(div) {
                border-radius: 3px;

                :global(.saturation-black, .saturation-white) {
                  border-radius: 3px;
                }
              }
            }

            .hueWrapper {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 16px;
              column-gap: 8px;

              .huePicker {
                width: 100%;
                height: 14px;
                flex: 1 1 100%;
                position: relative;
                border-radius: 50px;
                border: 1px solid ${theme.color.border};

                :global(.colorPointer) {
                  transform: translate(-8px, -2px);
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default memo(ColorPickerPanel);
