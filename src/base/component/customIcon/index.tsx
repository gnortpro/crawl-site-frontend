import React, { memo, useMemo } from 'react';

import dynamic from 'next/dynamic';

import cx from 'classnames';

import { Skeleton } from '../skeleton';
import { IconModeType, IconType, SIZE, SizeType } from './consts';

interface Props extends React.HTMLAttributes<SVGElement> {
  type: IconType;
  size?: SizeType;
  className?: string;
  mode?: IconModeType;
  isIgnoreOutline?: boolean;
}

export const CustomIcon: React.FC<Props> = memo(
  ({ type, className, color, size = 's', mode = 'outline', isIgnoreOutline = false, ...props }) => {
    const DynamicIcon = useMemo(
      () =>
        dynamic<React.SVGProps<SVGSVGElement>>(() => import(`assets/ic_${mode}_${type}.svg`), {
          loading: () => <Skeleton.Icon className={className} size={size} />,
        }),
      [className, mode, size, type]
    );

    return (
      <>
        <DynamicIcon className={cx('icon', isIgnoreOutline, className, size, `icon_${mode}`)} {...props} />
        <style jsx>
          {`
            svg {
              display: inline-block;
              vertical-align: middle;
              color: ${color};

              &.icon_outline {
                outline: none;
                outline-style: none;
              }

              &:not(.logo) {
                :global(path),
                :global(circle) {
                  fill: ${!isIgnoreOutline ? 'currentColor' : 'unset'};
                }
              }

              &.${size} {
                width: ${SIZE[size]}px;
                height: ${SIZE[size]}px;
              }
            }
          `}
        </style>
      </>
    );
  }
);
