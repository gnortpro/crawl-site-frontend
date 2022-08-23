import React from 'react';

import theme from 'theme';

const ColorPointer: React.FC = () => {
  return (
    <div className="colorPointer">
      <style jsx>
        {`
          .colorPointer {
            cursor: grab;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: white;
            transform: translate(-8px, -8px);
            border: 1px solid ${theme.color.border};
            box-shadow: ${theme.shadow[4]};
          }
        `}
      </style>
    </div>
  );
};

export default ColorPointer;
