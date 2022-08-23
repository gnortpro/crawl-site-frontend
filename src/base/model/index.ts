import React from 'react';

import { IconType } from 'component/customIcon/consts';

interface NavPage {
  path: string;
}

export interface NavInfo {
  id: string;
  label: string;
  icon?: IconType;
  path?: string;
  fake?: boolean;
}

export interface NavModule extends NavInfo {
  modules?: NavModule[];
  pages?: NavPage[];
}

export interface NavDomain extends NavInfo {
  modules: NavModule[];
}

export type RootRoutes = NavDomain[];

export interface ReactSelectOption extends Record<string, any> {
  disabled?: boolean;
  image?: string;
  desc?: string;
  label: string;
  value: any;
  icon?: {
    type: IconType;
    color?: string;
    mode?: any;
  };
}

export type UseReducerType<T> = React.Reducer<T, T>;

export interface ApiPageInfoModel {
  hasNextPage?: boolean;
  startAfter?: string;
  endBefore?: string;
  hasPreviousPage?: boolean;
}

export interface ApiResponseModel<T> {
  nodes?: T;
  pageInfo?: ApiPageInfoModel;
}

export interface SimpleApiResponseModel<T> {
  data?: T;
}

export type ThemeColors = 'red' | 'green' | 'gray' | 'blue' | 'orange';

export interface FileData {
  name: string;
  url: string;
  id: string;
}

export interface GetDetailModel {
  id: string;
}
