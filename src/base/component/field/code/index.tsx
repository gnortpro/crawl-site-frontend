import React, { memo, useEffect, useRef } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import { setupRef } from 'utils';

// import styles from './styles';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
}

export const Code = memo(
  React.forwardRef<HTMLTextAreaElement, Props>(({ value, isInvalid, ...props }, outerRef) => {
    const { rows, disabled: isDisabled } = props;

    const inputElement = useRef();

    return (
      <CodeMirror
        ref={setupRef(inputElement, outerRef)}
        value={value as string}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true,
        }}
        {...props}
      />
    );
  })
);
