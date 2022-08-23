import { StylesConfig } from 'react-select';

import { ReactSelectOption } from 'model';
import theme from 'theme';

const { color } = theme;

export const styles: StylesConfig<ReactSelectOption, boolean> = {
  container: (base, state) => ({
    ...base,
    pointerEvents: state.selectProps.isDisabled ? 'all' : base.pointerEvents,
    cursor: state.selectProps.isDisabled ? 'not-allowed' : 'pointer',
    ':hover .removeBtn': {
      opacity: 1,
    },
  }),
  control: (base, state) => {
    const { menuIsOpen, isFocused, selectProps } = state;
    const { isInvalid, isDisabled } = selectProps || {};
    const activeColor = (menuIsOpen || isFocused) && color.primary[500];
    const disabledColor = isDisabled && color.border;
    const errorColor = isInvalid && color.red[500];

    return {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 100ms ease 0s',
      boxSizing: 'border-box',
      outline: '0px !important',
      position: 'relative',
      boxShadow: 'none',
      borderWidth: 1,
      borderRadius: 4,
      borderStyle: 'solid',
      lineHeight: 'normal',
      cursor: isDisabled ? 'not-allowed' : 'default',
      color: isDisabled ? color.ink[400] : color.ink[500],
      backgroundColor: isDisabled ? color.ink[200] : 'white',
      borderColor: disabledColor || errorColor || activeColor || color.border,
      caretColor: isInvalid ? color.red[500] : color.primary[500],
      zIndex: state.isFocused ? 1 : 0,
    };
  },
  menu: base => ({
    ...base,
    zIndex: 100,
    marginTop: 2,
    marginBottom: 2,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: color.border,
    boxShadow: '0px 4px 8px rgba(1, 18, 34, 0.1)',
    height: 'auto',
  }),
  menuList: base => ({
    ...base,
    minHeight: 32,
    borderRadius: 4,
    fontSize: '13px',
  }),
  option: (base, { isDisabled, isSelected, data }) => ({
    padding: '0 12px',
    height: data?.desc ? 48 : 32,
    width: '100%',
    lineHeight: '20px',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    color: color.ink[isDisabled ? 200 : 500],
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    backgroundColor: isSelected ? theme.color.primary[100] : 'white',
    '.optionImage': { borderRadius: 2, flex: 'none' },
    '.optionIcon': { flex: 'none' },
    '.checkbox + .optionImage': { marginLeft: 8 },
    '.checkbox + .optionIcon': { marginLeft: 8 },
    '.checkbox': { pointerEvents: 'none' },
    ':hover': {
      backgroundColor: isDisabled ? 'white' : theme.color.ink[100],
    },
  }),
  valueContainer: (base, { selectProps }) => ({
    ...base,
    width: '100%',
    padding: '0px 6px',
    maxHeight: '132px',
    minHeight: '25px',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative',
    paddingRight: selectProps?.isClearable ? '45px' : '30px',
  }),
  singleValue: (base, { selectProps }) => ({
    ...base,
    transform: 'unset',
    display: 'flex',
    fontSize: '13px',
    position: 'unset',
    maxWidth: 'unset',
    alignItems: 'center',
    paddingRight: selectProps?.isClearable ? '45px' : '15px',
    color: selectProps?.isDisabled ? theme.color.ink[400] : theme.color.ink[500],
    '.optionImage': { marginRight: 8, marginLeft: 2, borderRadius: 2 },
    '.optionIcon': { marginRight: 6 },
    '.label': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  multiValue: (base, { isDisabled }) => ({
    ...base,
    height: 24,
    maxWidth: '90%',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: color.ink[isDisabled ? 100 : 200],
    '.optionImage': { marginLeft: 8, flex: 'none', borderRadius: 2 },
    '.optionIcon': {
      flex: 'none',
      marginLeft: 8,
      marginRight: -2,
      width: '16px !important',
      height: '16px !important',
    },
  }),
  multiValueLabel: (base, state) => ({
    ...base,
    margin: 'auto',
    fontSize: '13px',
    paddingRight: state.isDisabled ? 8 : 4,
    paddingLeft: 8,
  }),
  multiValueRemove: base => ({
    ...base,
    paddingLeft: 0,
    paddingRight: 4,
    cursor: 'pointer',
    color: theme.color.ink[400],
    ':hover': {
      color: theme.color.ink[500],
    },
  }),
  indicatorsContainer: base => ({
    ...base,
    color: color.ink[500],
    position: 'absolute',
    height: '100%',
    right: '0px',
  }),
  clearIndicator: base => ({
    ...base,
    opacity: 0,
    cursor: 'pointer',
    padding: '3px 4px',
    color: color.ink[300],
    ':hover': {
      color: color.ink[400],
    },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    padding: '3px 6px',
    marginLeft: '-6px',
    color: state.isDisabled ? color.ink[400] : color.ink[500],
    '&:hover': {
      color: color.ink[500],
    },
  }),
  placeholder: base => ({
    ...base,
    lineHeight: 'normal',
    color: color.ink[300],
    fontSize: '13px',
  }),
  input: base => ({
    ...base,
    maxWidth: '90%',
    '> div': {
      width: '100%',
      input: {
        maxWidth: '100%',
        whiteSpace: 'normal',
        wordBreak: 'break-all',
      },
    },
  }),
  noOptionsMessage: base => ({
    ...base,
    minHeight: 32,
    cursor: 'default',
    lineHeight: '20px',
    padding: '6px 12px',
    color: color.ink[300],
  }),
  loadingMessage: base => ({
    ...base,
    height: 32,
    padding: '6px 12px',
  }),
  menuPortal: base => ({ ...base, zIndex: 9999 }),
};
