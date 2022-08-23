import { ColorResult } from 'react-color';

interface HSVColor {
  h: number;
  s: number;
  v: number;
  a?: number | undefined;
}

export interface ColorData extends ColorResult {
  hsv?: HSVColor;
}
