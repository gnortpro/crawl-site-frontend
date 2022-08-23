import {
  ClearIndicator,
  DropdownIndicator,
  Input,
  LoadingIndicator,
  LoadingMessage,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option,
  SingleValue,
} from './components';

export const MESSAGE = {
  CREATE: 'Create',
  LOADING: 'Loading...',
  ERROR: 'An error has occurred',
  NO_MATCHES: 'No matches found',
  NO_DATA: 'No data found',
};

export const COMPONENTS = {
  Option,
  SingleValue,
  LoadingMessage,
  ClearIndicator,
  MultiValueLabel,
  MultiValueRemove,
  LoadingIndicator,
  DropdownIndicator,
  MultiValueContainer,
  IndicatorSeparator: null,
  Input,
};

// eslint-disable-next-line operator-linebreak
export const getEmptyMessage =
  (message: string, isError: boolean) =>
  ({ inputValue }: { inputValue: string }): string => {
    if (isError) return MESSAGE.ERROR;
    if (inputValue?.trim()) return MESSAGE.NO_MATCHES;
    return message || MESSAGE.NO_DATA;
  };
