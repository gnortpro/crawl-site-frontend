import { GLOBAL_CONST } from 'consts';
import { isFunction } from 'lodash';
import { ReactSelectOption } from 'model';
import moment, { Moment, MomentInput } from 'moment';

export const formatDateTime = (raw: Date | string | number, format: string): string => {
  if (!raw) return '';

  return moment(new Date(raw)).format(format);
};

export const formatStringMoment = (raw: string, format = GLOBAL_CONST.FORMAT.DATE_AND_TIME_DATEPICKER): Moment => {
  return moment(raw, format, true);
};

export const setupRef = <T>(innerRef: any, outerRef: ((instance: T) => void) | any) => {
  return (element: T): void => {
    if (!innerRef) return;
    innerRef.current = element;

    if (!outerRef) return;
    if (isFunction(outerRef)) {
      outerRef(element);
    } else {
      outerRef.current = element;
    }
  };
};

export const reactSelectMap = <T>(
  source: T,
  valueProp?: string,
  labelProp?: string,
  descProp?: string
): ReactSelectOption => {
  if (!source) return;

  labelProp = labelProp || valueProp;
  valueProp = valueProp || labelProp;

  if (!(valueProp && labelProp)) return { label: String(source), value: source, desc: descProp };

  return {
    ...source,
    label: source[labelProp],
    value: source[valueProp],
    ...(descProp && { desc: source[descProp] }),
  };
};

export const getSelectOptionValue = <T extends ReactSelectOption | ReactSelectOption[]>(
  source: T
): T extends ReactSelectOption[] ? any[] : any => {
  if (!source) return;
  return Array.isArray(source)
    ? (source as ReactSelectOption[]).map(option => option?.value)
    : (source as ReactSelectOption).value;
};

export const convertTimeNumberToString = (raw: number): string => {
  if (raw < 10) return `0${raw.toString()}`;
  return raw.toString();
};

export const mergeReducer = <T>(currentState: T, newState: T): T => {
  return { ...currentState, ...newState };
};

export const splitURL = (url: string): string[] => url.split(/(?=\/)/g);

export const compareURL = (source: string, target: string): boolean => {
  const sourceChunks = splitURL(source);
  const targetChunks = splitURL(target);

  return sourceChunks.every((chunk, index) => targetChunks[index] === chunk);
};

export const downloadFileFromURL = (url: string): void => {
  const anchorEl = document.createElement('a');

  anchorEl.href = url;
  anchorEl.setAttribute('target', '_blank');
  document.body.appendChild(anchorEl);
  anchorEl.click();
  anchorEl.remove();
};

export const removeClassByChar = (obj: any, char: string): void => {
  const classNames = Array.from(obj[0].classList) as string[];

  const charReg = new RegExp(`^${char}(.*)`, 'g');
  return obj.removeClass(() => {
    return classNames.filter(className => (className.match(charReg) || []).length > 0);
  });
};

export const removeClassByArray = (obj: any, list: string[]): string =>
  obj.removeClass((_, className) => {
    return list.filter(cl => className.includes(cl)).join(' ');
  });

export const getYoutubeCodeFromURL = (url: string): string => {
  const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  return regex.exec(url)[3];
};

export const isValidDate = (date: MomentInput): boolean => moment(date).isValid();
