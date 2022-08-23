import React, { memo } from 'react';

import cx from 'classnames';

import styles from './styles';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
}

export const TextArea = memo(
  React.forwardRef<HTMLTextAreaElement, Props>(({ isInvalid, ...props }, outerRef) => {
    const { rows, disabled: isDisabled } = props;

    return (
      <>
        <textarea
          className={cx('textAreaField form-input', { disabled: isDisabled, error: isInvalid })}
          disabled={isDisabled}
          rows={rows || 4}
          ref={outerRef}
          {...props}
        />

        <style jsx>{styles}</style>
      </>
    );
  })
);
