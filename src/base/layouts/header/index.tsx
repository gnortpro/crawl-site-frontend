import React, { FC, useState } from 'react';

import { Field } from 'component/field';
import { ReactSelectOption } from 'model';

import { UserMenu } from './userMenu';

export const Header: FC = () => {
  const [shopValue, setShopValue] = useState<ReactSelectOption>(null);

  const onChangeShop = (value: ReactSelectOption) => setShopValue(value);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex-1">
            <div className="w-full lg:w-2/5 flex items-center">
              <div className="mr-2">Change shop:</div>
              <div className="w-2/3">
                <Field.Select.Basic
                  isClearable={false}
                  value={shopValue}
                  options={[
                    {
                      value: 'shop1',
                      label: 'Shop 1',
                    },
                    {
                      value: 'shop2',
                      label: 'Shop 2',
                    },
                  ]}
                  onChange={onChangeShop}
                />
              </div>
            </div>
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
