import React, { memo } from 'react';

import cx from 'classnames';
import { Button } from 'component/button';

import Clean, { PopoverProps } from '../Clean';
import styles from './styles';

const SIZE = {
  m: 332,
};

interface Props extends PopoverProps {
  title?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  size?: keyof typeof SIZE;
}

const Basic: React.FC<Props> = memo(
  ({ title, onCancel, onConfirm, cancelText, confirmText, onClose, children, size = 'm', ...props }) => {
    return (
      <Clean onClose={onClose} {...props}>
        <div className={cx('popoverContent', size)}>
          {title && <div className="popoverHeader">{title}</div>}

          <div className="popoverBody">{children}</div>

          {!!onConfirm && (
            <div className="popoverFooter">
              <Button.Fill color="secondary" size="s" onClick={onCancel || onClose}>
                {cancelText || 'Cancel'}
              </Button.Fill>

              <Button.Fill color="primary" size="s" onClick={onConfirm}>
                {confirmText || 'Confirm'}
              </Button.Fill>
            </div>
          )}

          <style jsx>{styles}</style>
          <style jsx>
            {`
              .popoverContent {
                &.${size} {
                  max-width: ${SIZE[size]}px;
                }
              }
            `}
          </style>
        </div>
      </Clean>
    );
  }
);

export default Basic;

// (!position || isOpen)
// On the first render, 'position' is undefined because the popper hasn't entered the DOM, hence no 'popperEl' ref
// This line of code makes the popper to briefly appear, so the popper's ref can be registered
