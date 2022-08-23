import React, { memo, ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

import theme from 'theme';

import styles from './styles';

interface Props {
  isShow: boolean;
  contentOpacity?: boolean;
  backgroundDimming?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const OVERLAY_HAS_READY: TransitionStatus[] = ['entering', 'entered'];

export const OverlayMask: React.FC<Props> = memo(
  ({ isShow, onClick, children, contentOpacity = false, backgroundDimming = true }) => {
    const container = useRef(document.getElementById('portal-container'));
    const overlayMaskRef = useRef();

    const cssVar = {
      '--background-dim': backgroundDimming ? theme.color.inkTrans[400] : 'transparent',
    } as React.CSSProperties;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === overlayMaskRef.current && onClick) onClick(event);
    };

    if (container) {
      return ReactDOM.createPortal(
        <CSSTransition in={isShow} mountOnEnter unmountOnExit appear={isShow} classNames="dimming" timeout={250}>
          {(state: TransitionStatus) => (
            <div
              style={cssVar}
              ref={overlayMaskRef}
              onClick={handleClick}
              className="overlayMask"
              data-content-opacity={!!contentOpacity}>
              {typeof children === 'function' ? children(OVERLAY_HAS_READY.includes(state)) : children}

              <style jsx>{styles}</style>
            </div>
          )}
        </CSSTransition>,
        container.current
      );
    }
    return <></>;
  }
);
