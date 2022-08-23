import React from 'react';

import cx from 'classnames';
import { SIZE, SizeType } from 'base/customIcon/consts';

interface Props {
  size?: SizeType;
  className?: string;
}

export const Icon: React.FC<Props> = ({ className, size = 'm' }) => (
  <div className={cx('icon bg-slate-200', className, size)}>
    <style jsx>
      {`
        div {
          flex: 0 0 auto;
          border-radius: 6px;
          display: inline-block;
          vertical-align: middle;

          &.${size} {
            width: ${SIZE[size]}px;
            height: ${SIZE[size]}px;
          }
        }
      `}
    </style>
  </div>
);
