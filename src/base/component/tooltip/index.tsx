import type { Placement, PositioningStrategy } from '@popperjs/core';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';

import cx from 'classnames';

import styles from './styles';

type TooltipMode = 'dark' | 'light';

const SIZE = {
  m: 232,
  l: 364,
};

export interface TooltipProps {
  content: ReactNode;
  mode?: TooltipMode;
  className?: string;
  anchorClassName?: string;
  size?: keyof typeof SIZE;
  strategy?: PositioningStrategy;
  placement?: Placement;
  noArrow?: boolean;
  offset?: number;
}

export const Tooltip: React.FC<TooltipProps> = memo(
  ({
    content,
    children,
    className,
    anchorClassName,
    size = 'm',
    mode = 'dark',
    noArrow = false,
    placement = 'auto',
    strategy = 'absolute',
    offset = noArrow ? 4 : 12,
  }) => {
    const nodeRef = useRef(null); // @link https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879

    const [isShow, setIsShow] = useState(false);
    const [arrowEl, setArrowEl] = useState<HTMLDivElement>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement>(null);
    const [popperEl, setPopperEl] = useState<HTMLDivElement>(null);
    const isValidContent = Boolean(content || content === 0);
    const child = useMemo(() => React.Children.only(children) as React.ReactElement, [children]);
    const { styles: popperStyles, attributes } = usePopper(anchorEl, popperEl, {
      strategy,
      placement,
      modifiers: [
        { name: 'arrow', options: { element: arrowEl, padding: 4 } },
        { name: 'offset', options: { offset: [0, offset] } },
      ],
    });

    const handleMouseEnter = useCallback(() => setIsShow(true), []);
    const handleMouseLeave = useCallback(() => setIsShow(false), []);

    useEffect(() => {
      if (!isValidContent) setIsShow(false);
    }, [isValidContent]);

    if (!isValidContent) return child;

    return (
      <>
        <div
          className={cx('tooltipAnchor', anchorClassName)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={setAnchorEl}>
          {child}
        </div>

        <CSSTransition
          nodeRef={nodeRef}
          in={isShow}
          timeout={250}
          appear={isShow}
          classNames="tooltip"
          unmountOnExit
          mountOnEnter>
          <div
            id="tooltip"
            ref={setPopperEl}
            style={popperStyles.popper}
            className={cx('tooltip', className, mode, size)}
            {...attributes.popper}>
            {content}

            {!noArrow && (
              <div id="arrow" data-popper-arrow ref={setArrowEl} style={popperStyles.arrow}>
                <div className="square" />
              </div>
            )}

            <style jsx>{styles}</style>
          </div>
        </CSSTransition>
      </>
    );
  }
);

export interface TooltipRendererProps extends Partial<TooltipProps> {
  tooltip: React.ReactNode | TooltipProps;
}

export const TooltipRenderer: React.FC<TooltipRendererProps> = memo(({ tooltip, children, ...props }) => {
  if (typeof tooltip === 'string' || typeof tooltip === 'number' || React.isValidElement(tooltip)) {
    return (
      <Tooltip content={tooltip} {...props}>
        {children}
      </Tooltip>
    );
  }

  return (
    <Tooltip {...props} {...(tooltip as TooltipProps)}>
      {children}
    </Tooltip>
  );
});
