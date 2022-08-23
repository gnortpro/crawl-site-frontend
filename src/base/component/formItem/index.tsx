import { ErrorMessage } from '@hookform/error-message';
import React, { cloneElement, ReactElement, ReactNode } from 'react';
import { DeepMap, FieldError, get } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';

import cx from 'classnames';
import { TooltipRenderer } from 'component/tooltip';

import { CustomIcon } from '../customIcon';
import styles from './styles';

interface Props extends Record<string, any> {
  hint?: string;
  name?: string;
  label?: string;
  tooltip?: string;
  className?: string;
  required?: boolean;
  gutterSize?: 'none' | 'xs' | 's' | 'm' | 'l';
  errors?: DeepMap<Record<string, any>, FieldError>;
}

export const FormItem: React.FC<Props> = ({
  name,
  hint,
  label,
  tooltip,
  required,
  className,
  errors = {},
  gutterSize = 'm',
  children,
}) => {
  const element = React.Children.only(children) as ReactElement;
  const { name: innerName, disabled, isDisabled } = element.props;
  const selfName = innerName || name;
  const hasError = !!get(errors, selfName || '');

  return (
    <div
      className={cx('formItem', className, {
        [`gutter--${gutterSize}`]: gutterSize !== 'none',
      })}>
      {label && (
        <div className="formLabel">
          {label}
          {required && <span className="requiredMark">*</span>}
          {tooltip && (
            <TooltipRenderer tooltip={tooltip} placement="right">
              <CustomIcon type="information" mode="fill" size="s" />
            </TooltipRenderer>
          )}
        </div>
      )}

      <div className="formBody">
        {cloneElement(element, {
          ...(errors && selfName && { isInvalid: hasError }),
        })}
      </div>

      {selfName && !(disabled || isDisabled) && (
        <CSSTransition classNames="formError" in={hasError} timeout={90} unmountOnExit>
          <div className="formError">
            <ErrorMessage errors={errors} name={selfName} />
          </div>
        </CSSTransition>
      )}

      {hint && <div className="formHint">{hint}</div>}

      <style jsx>{styles}</style>
    </div>
  );
};
