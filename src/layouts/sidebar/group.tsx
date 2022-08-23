import { FC, useState } from 'react';

interface IProps {
  activeCondition?: boolean;
  children?: any;
}

export const SideBarGroup: FC<IProps> = ({ children, activeCondition }) => {
  const [open, setOpen] = useState(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activeCondition && 'bg-gray-900'}`}>
      {children(handleClick, open)}
    </li>
  );
};
