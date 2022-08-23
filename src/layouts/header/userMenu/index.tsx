import React, { FC, useState } from 'react';

import { CustomIcon } from 'component/customIcon';
import { Popover } from 'component/popover';

export const UserMenu: FC = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const closePopover = () => {
    setIsPopoverOpen(false);
  };

  const openPopover = () => setIsPopoverOpen(true);

  const handleCancel = () => {
    closePopover();
  };

  const Anchor = (
    <button className="inline-flex justify-center items-center group" onClick={openPopover}>
      <CustomIcon type="user_man" mode="color" />
      <div className="flex items-center truncate">
        <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">Acme Inc.</span>
        <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </div>
    </button>
  );

  return (
    <Popover.Clean
      placement="bottom"
      anchorClassName="dateRangePicker"
      onClose={handleCancel}
      isOpen={isPopoverOpen}
      anchor={Anchor}
      noArrow>
      <>
        <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
          <div className="font-medium text-gray-800">Acme Inc.</div>
          <div className="text-xs text-gray-500 italic">Administrator</div>
        </div>
        <ul>
          <li>
            <a
              className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
              href="/settings">
              Settings
            </a>
          </li>
          <li>
            <a
              className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
              href="/signin">
              Sign Out
            </a>
          </li>
        </ul>
      </>
    </Popover.Clean>
  );
};
