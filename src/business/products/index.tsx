import React, { useState } from 'react';

import { PageLayout } from 'base/layouts/page';
import { Tab, Tabs } from 'component/tabs';

export const ProductComponent = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleChangeTab = (selected: number) => setSelectedTab(selected);

  return (
    <PageLayout title="Product">
      <div className="p-4">
        <div className="text-sm text-gray-400 mb-6">Select store above to control products.</div>
        <Tabs currentTab={selectedTab} onChange={handleChangeTab} hideCreate isContainer>
          <Tab value={1} hideDelete>
            Add products
          </Tab>
          <Tab value={2} hideDelete>
            Draft products
          </Tab>
          <Tab value={3} hideDelete>
            Categories
          </Tab>
        </Tabs>
        {selectedTab === 1 && <div>hello tab 1</div>}
        {selectedTab === 2 && <div>hello tab 2</div>}
        {selectedTab === 3 && <div>hello tab 2</div>}
      </div>
    </PageLayout>
  );
};
