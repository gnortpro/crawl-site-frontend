import React, { useEffect, useRef, useCallback } from 'react';

import cx from 'classnames';
import { Button } from 'component/button';
import { CustomIcon } from 'component/customIcon';
import { IconType } from 'component/customIcon/consts';
import theme from 'theme';

import styles from './styles';

export interface TabProps {
  value?: any;
  icon?: IconType;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  hasError?: boolean;
  hideDelete?: boolean;
  isContainer?: boolean;
  counter?: string | number;
  onChange?: (value: any) => void;
  onDelete?: (tab: any) => void;
}

const Tab: React.FC<TabProps> = ({
  icon,
  value,
  counter,
  disabled,
  hideDelete,
  className,
  selected,
  children,
  hasError,
  onChange,
  onDelete,
  isContainer = false,
}) => {
  const tabRef = useRef<HTMLDivElement>();

  const handleSelect = () => {
    if (selected) return;
    if (!disabled) onChange(value);
  };

  const handleDeleteFocus = (event: React.FocusEvent) => event.stopPropagation();
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onDelete) onDelete(value);
    event.stopPropagation();
  };

  const scrollTabIntoView = useCallback(() => {
    const scrollPadding = isContainer && !hideDelete ? 80 : 40;

    const tabElement = tabRef.current;
    const scrollElement = tabElement?.offsetParent;
    if (!scrollElement) return;

    const tabWidth = tabElement.clientWidth;
    const tabLeftEnd = tabElement.offsetLeft;
    const tabRightEnd = tabLeftEnd + tabWidth;

    const visibleArea = scrollElement.clientWidth;
    const leftBoundary = scrollElement.scrollLeft;
    const rightBoundary = scrollElement.scrollLeft + scrollElement.clientWidth;

    if (tabLeftEnd < leftBoundary) {
      scrollElement.scrollTo({
        behavior: 'smooth',
        left: tabLeftEnd - scrollPadding,
      });
    }

    if (tabRightEnd > rightBoundary) {
      scrollElement.scrollTo({
        behavior: 'smooth',
        left: tabRightEnd - visibleArea + scrollPadding,
      });
    }
  }, [hideDelete, isContainer]);

  useEffect(() => {
    if (selected) {
      scrollTabIntoView();
    }
  }, [selected, scrollTabIntoView]);

  return (
    <div
      ref={tabRef}
      onFocus={handleSelect}
      onClick={handleSelect}
      tabIndex={disabled ? -1 : 0}
      title={typeof children === 'string' ? children : undefined}
      className={cx('tab', className, {
        container: !!isContainer,
        default: !isContainer,
        disabled: !!disabled,
        active: !!selected,
      })}>
      {hasError && <CustomIcon className="errorIcon" type="alert_circle" mode="fill" color={theme.color.red[500]} />}
      {!hasError && icon && <CustomIcon className="tabIcon" type={icon} />}
      {children && <div className="label">{children}</div>}
      {(counter || counter === 0) && <div className="counter">{counter}</div>}
      {isContainer && !hideDelete && (
        <Button.Icon
          size="s"
          iconType="close_mark"
          disabled={disabled}
          onClick={handleDelete}
          onFocus={handleDeleteFocus}
        />
      )}

      <style jsx>{styles}</style>
    </div>
  );
};

export default Tab;
