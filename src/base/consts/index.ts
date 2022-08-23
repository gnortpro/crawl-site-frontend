export const GLOBAL_CONST = {
  APP_LOGO: {
    blueLogo: 'https://cdn.tenonapp.com/images/blue-logo-icon.png',
    largeLogo: '',
  },
  APP_LIST: [
    {
      name: 'bar',
      url: '/popups/bar/create',
      intro: 'barIntro',
      image: 'https://www.saraharberson.com/hubfs/Blogs/SH_Order-Extracurriculars-blog.jpg',
    },
    {
      name: 'spinToWin',
      url: '/popups/spintowin/create',
      intro: 'spinIntro',
      image: 'https://thecollegepost.com/wp-content/uploads/2021/03/Asian-student-studying.jpg',
    },
  ],
  LOGO: {
    DEFAULT: 'https://cdn.tenonapp.com/images/blue-tenonapp.png',
    SQUARE: 'https://static.announceway.com/images/logos/logo-blue-square.png',
  },
  APP_TITLE: 'Tenon',
  BASE_PERMISSION: 'View',
  LOADING: 'Loading...',
  VALIDATION: {
    required: 'Please complete this field',
    maxLength: 'Maximum number of characters allowed:',
    minLength: 'Minimum number of characters allowed:',
    selectFormat: 'Please select at least one format',
    uniqueLabel: 'All options must have a unique name',
    specialChar: 'Special characters are not allowed',
    specificSpecialChar: 'These special characters are not allowed:',
  },
  FORMAT: {
    DATE_ONLY: 'DD/MM/YYYY',
    DATE_REVERSED: 'YYYY-MM-DD',
    DATE_AND_TIME: 'DD/MM/YYYY HH:mm:ss',
    DATE_AND_TIME_DATEPICKER: 'DD/MM/YYYY | HH:mm:ss',
    ISO_DATE_ONLY: 'YYYY-MM-DD',
    ISO_DATE_TIME: 'YYYY-MM-DDTHH:mm:ss.sssZ',
    ISO_DATE_INTEGER: 'YYYYMMDD',
    LOCALIZED_FORMAT: 'lll',
  },
  MSG: {
    NODATA: 'Không có dữ liệu', // dữ liệu rỗng
    NODATAFOUND: 'Không tìm thấy dữ liệu',
    PERMISSION_DENY: 'Không có quyền truy cập',
  },
  PAGE_TYPE: {
    CREATE: 'CREATE',
    EDIT: 'EDIT',
    VIEW: 'VIEW',
  },
  SORT_DIRECTION: {
    DESC: -1,
    ASC: 1,
  },
  NOTI: {
    GENERAL_ERROR: 'An error has occurred, please try again later',
    DUPLICATE_ERROR: (name: string): string => `This ${name} already exists, please try another one`,
  },
  VNI_CHARACTERS:
    'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂưăạảấầẩẫậắằẳẵặẹẻẽếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý',
  SAVE: 'Save',
  SAVE_DRAFT: 'Save Draft',
  CANCEL: 'Cancel',
  CONFIRM: 'Confirm',
  NEXT: 'Next',
  BACK: 'Back',
  FINISH: 'Finish',
  CLOSE: 'Close',
  CREATE: 'Create',
};

export const ERROR_URL = {
  404: '/404',
  403: '/403',
};

export const HTTP_STATUS_CODE = {
  200: 200,
  400: 400,
  401: 401,
  403: 403,
  404: 404,
  500: 500,
  503: 503,
};

export const BE_ERROR_CODE = {
  404000: 404000,
};

export enum ERROR_TYPE {
  REQUIRED = 'required',
  MAX_LENGTH = 'maxLength',
  NO_VNMESE_CHAR = 'noVNMeseChar',
  ALLOW_SPECIAL_CHAR = 'allowSpecialChar',
}

export const UserType = {
  USERNAME_PASSWORD: 'USERNAME_PASSWORD',
  GSUITE: 'G_SUITE',
};

export const GLOBAL_REGEX = {
  EMAIL: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

// Base unit is 1 Byte
export const DATA_SIZE_UNIT = {
  KB: '1e3',
  MB: '1e6',
  GB: '1e9',
  TB: '1e12',
  PB: '1e15',
};

export const PAGE_ITEMS_OPTIONS = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];

export enum MIME_TYPE {
  PNG = 'image/png',
  GIF = 'image/gif',
  JPG = 'image/jpeg',
  JPEG = 'image/jpeg',
  CSV = 'text/csv',
  HTML = 'text/html',
  PDF = 'application/pdf',
  JSON = 'application/json',
  LOTTIE = 'application/json',
  XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}

// export const DEFAULT_COLOR = {
//   PRIMARY: '#5c6ac4',
//   SECONDARY: '#ecc94b',
//   WARNING: '#fb923c',
//   DANGER: '#ef4444',
//   SUCCESS: '#22c55e',
//   CUSTOM: 'custom',
// };
export const DEFAULT_COLOR = {
  TRANSPARENT: 'transparent',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
  CUSTOM: 'custom',
};

export const DEFAULT_COLOR_OPTIONS = [
  {
    value: 'transparent',
    label: 'Transparent',
  },
  {
    value: '#5C6AC4',
    label: 'Primary',
  },
  {
    value: '#ECC94B',
    label: 'Secondary',
  },
  {
    value: '#FB923C',
    label: 'Warning',
  },
  {
    value: '#EF4444',
    label: 'Danger',
  },
  {
    value: '#22C55E',
    label: 'Success',
  },
  {
    value: 'custom',
    label: 'Custom',
  },
];

export const DEFAULT_BORDER_COLOR_OPTIONS = {
  transparent: 'Transparent',
  primary: 'Primary',
  secondary: 'Secondary',
  warning: 'Warning',
  danger: 'Danger',
  success: 'Success',
};

export const GLOBAL_COLOR = {
  [DEFAULT_COLOR.PRIMARY]: '#5c6ac4',
  [DEFAULT_COLOR.SECONDARY]: '#ecc94b',
  [DEFAULT_COLOR.WARNING]: '#fb923c',
  [DEFAULT_COLOR.DANGER]: '#ef4444',
  [DEFAULT_COLOR.SUCCESS]: '#22c55e',
  [DEFAULT_COLOR.TRANSPARENT]: '#22c55e',
};
