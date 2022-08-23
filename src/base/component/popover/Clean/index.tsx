import { Placement, PositioningStrategy } from '@popperjs/core';
import React, { memo, ReactNode, useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';

import cx from 'classnames';
import { OverlayMask } from 'component/overlayMask';
import { useKeyboardEvent } from 'hooks/useKeyboardEvent';

import styles from './styles';

export interface PopoverProps {
  isOpen: boolean;
  offset?: number;
  anchor: ReactNode;
  noArrow?: boolean;
  className?: string;
  noPadding?: boolean;
  placement?: Placement;
  strategy?: PositioningStrategy;
  anchorClassName?: string;
  onClose: () => void;
}

const Clean: React.FC<PopoverProps> = memo(
  ({
    anchor,
    isOpen,
    onClose,
    strategy,
    children,
    className,
    anchorClassName,
    placement = 'bottom',
    noArrow = false,
    offset = noArrow ? 4 : 12,
  }) => {
    useKeyboardEvent('keyup', isOpen, [{ key: 'Escape', callback: onClose }]);

    const isClickedInside = useRef<boolean>(false);
    const closeCallbackRef = useRef<() => void>(onClose);
    const [arrowEl, setArrowEl] = useState<HTMLDivElement>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement>(null);
    const [popperEl, setPopperEl] = useState<HTMLDivElement>(null);
    const { styles: popperStyles, attributes } = usePopper(anchorEl, popperEl, {
      strategy,
      placement,
      modifiers: [
        { name: 'arrow', options: { element: arrowEl, padding: 12 } },
        { name: 'offset', options: { offset: [0, offset] } },
      ],
    });

    // Click outside listener
    // Refer to https://github.com/adazzle/react-data-grid/pull/1417/files#diff-fdcbe490b776c1eed24c88d4b5f27d66R4
    const handleClickCapture = () => {
      isClickedInside.current = true;
    };

    // To update "onClose" callback reference
    useEffect(() => {
      closeCallbackRef.current = onClose;
    }, [onClose]);

    // Click outside listener
    // Refer to https://github.com/adazzle/react-data-grid/pull/1417/files#diff-fdcbe490b776c1eed24c88d4b5f27d66R4
    useEffect(() => {
      if (!isOpen) return;

      const handleDocumentClick = () => {
        if (isClickedInside.current) {
          isClickedInside.current = false;
          return;
        }

        // Make use of ref to avoid having "onClose" as dependency
        closeCallbackRef.current();
      };

      document.addEventListener('click', handleDocumentClick);

      return () => document.removeEventListener('click', handleDocumentClick);
    }, [isOpen]);

    return (
      <>
        <div className={cx('popoverAnchor', anchorClassName)} ref={setAnchorEl}>
          {anchor}

          <style jsx>
            {`
              .popoverAnchor {
                display: inline-block;
              }
            `}
          </style>
        </div>

        <OverlayMask isShow={isOpen} onClick={onClose} backgroundDimming={false}>
          {(isReady: boolean) => (
            <CSSTransition timeout={250} in={isOpen && isReady} classNames="popover" unmountOnExit>
              <div
                id="popover"
                ref={setPopperEl}
                style={popperStyles.popper}
                className={cx('popover', className)}
                {...attributes.popper}>
                <div className="content" onClickCapture={handleClickCapture}>
                  {children}

                  {!noArrow && (
                    <div id="arrow" data-popper-arrow ref={setArrowEl} style={popperStyles.arrow}>
                      <div className="square" />
                    </div>
                  )}
                </div>

                <style jsx>{styles}</style>
              </div>
            </CSSTransition>
          )}
        </OverlayMask>
      </>
    );
  }
);

export default Clean;
