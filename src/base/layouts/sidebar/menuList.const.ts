import { IconType } from 'component/customIcon/consts';

interface MenuItemModel {
  url: string;
  label: string;
  icon: IconType;
  type: 'Group' | 'Item';
  childs?: MenuItemModel[];
}

export const MENU_LIST: MenuItemModel[] = [
  {
    url: '/',
    label: 'Dashboard',
    icon: 'dashboard',
    type: 'Item',
  },
  {
    url: '/products',
    label: 'Products',
    icon: 'ecommerce',
    type: 'Item',
  },
];
