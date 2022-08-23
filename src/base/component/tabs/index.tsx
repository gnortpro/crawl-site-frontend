import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import cx from 'classnames';
import { Button } from 'component/button';
import { CustomIcon } from 'component/customIcon';

import styles from './styles';
import Tab, { TabProps } from './tab';

interface Props {
  currentTab: any;
  className?: string;
  isContainer?: boolean;
  hideCreate?: boolean;
  onChange: (value: any) => void;
  onDelete?: (tab: any) => void;
  onCreate?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TAB_COMP_TYPE = (<Tab />).type;

const Tabs: React.FC<Props> = ({
  onChange,
  children,
  className,
  currentTab,
  onCreate,
  onDelete,
  isContainer = false,
  hideCreate = false,
}) => {
  const [isOverflowed, setIsOverflowed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>();

  const TAB_ARRAY = useMemo(
    () =>
      React.Children.map(children, (child: ReactElement<TabProps>, index) => {
        if (!child) return child;
        if (child.type !== TAB_COMP_TYPE) {
          throw new Error('<Tabs> only accept <Tab> component as children');
        }

        const { value: childValue, disabled } = child.props;
        const value = childValue ?? index;
        const selected = !disabled && currentTab === value;

        return React.cloneElement(child, {
          selected,
          value,
          isContainer,
          onChange,
          onDelete,
        });
      }) as ReactElement<TabProps>[],
    [children, currentTab, isContainer, onChange, onDelete]
  );

  const navigateTab = (direction: 1 | -1) => () => {
    const validTabArray = TAB_ARRAY.filter(tab => !tab.props.disabled);
    const currentIndex = validTabArray.findIndex((tab, index) => (tab.props.value ?? index) === currentTab);
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = validTabArray.length - 1;
    }

    if (newIndex > validTabArray.length - 1) {
      newIndex = 0;
    }

    const newTab = validTabArray[newIndex];
    const { value } = newTab.props;
    onChange(value);
  };

  const onWrapperResize = (entries: ResizeObserverEntry[]) => {
    const entry = entries[0];
    const { target } = entry;
    const { offsetWidth, scrollWidth } = target as HTMLDivElement;

    setIsOverflowed(offsetWidth < scrollWidth);
  };

  useEffect(() => {
    const element = scrollRef.current;
    const handleMouseWheel = (event: WheelEvent) => {
      const { deltaY } = event;

      event.preventDefault();
      element.scrollBy({ left: deltaY * 1.5, behavior: 'smooth' });
    };

    element.addEventListener('wheel', handleMouseWheel, { passive: false });

    return () => element.removeEventListener('wheel', handleMouseWheel);
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(onWrapperResize);
    observer.observe(scrollRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cx('tabs', className, { container: !!isContainer })}>
      {isOverflowed && (
        <div className="navButton left">
          <Button.Icon iconType="arrow_left" onClick={navigateTab(-1)} />
        </div>
      )}

      <div className="scrollContainer" ref={scrollRef}>
        {TAB_ARRAY}
      </div>

      {isContainer && !hideCreate && (
        <button className="createButton" onClick={onCreate} tabIndex={0}>
          <CustomIcon type="plus" size="l" />
        </button>
      )}

      {isOverflowed && (
        <div className="navButton right">
          <Button.Icon iconType="arrow_right" onClick={navigateTab(1)} />
        </div>
      )}

      <style jsx>{styles}</style>
      <style jsx>
        {`
          .tabs.container {
            padding-left: ${isOverflowed ? 0 : 16}px;
          }
        `}
      </style>
    </div>
  );
};

export { Tabs, Tab };
