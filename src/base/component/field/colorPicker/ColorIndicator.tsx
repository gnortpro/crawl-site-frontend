import { FC } from 'react';

import theme from 'theme';

interface Props {
  color: string;
}

export const ColorIndicator: FC<Props> = ({ color }) => {
  return (
    <div className="colorIndicator" style={{ backgroundColor: color }}>
      <style jsx>
        {`
          .colorIndicator {
            flex: none;
            width: 20px;
            height: 20px;
            border-radius: 4px;
            border: 1px solid ${theme.color.border};
          }
        `}
      </style>
    </div>
  );
};
