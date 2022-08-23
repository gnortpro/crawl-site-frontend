export const DEFAULT = {
  MODE: 'outline',
  COLOR: 'inherit',
};

export const SIZE = {
  s: 16,
  m: 24,
  l: 32,
};

export type SizeType = keyof typeof SIZE;

export type IconModeType = 'outline' | 'fill' | 'color';

export type IconType =
  // Outline Icons
  | 'chart'
  | 'control_panel'
  | 'down_arrow'
  | 'dashboard'
  | 'ecommerce'
  // color
  | 'user_man';
