import React, { useState } from 'react';
import './tab.css'; // Import your CSS file for styling
import WarehouseListView from './WarehouseListView';
import CustomTable from './harvest';

import Map from './map';



function TabView() {
  const tabs = [
    { id: 'tab1', label: 'Ангорууд', content: 'Агуулахууд' },
    { id: 'tab2', label: 'Ургац хураалт', content: 'Хайх' },
    { id: 'tab3', label: 'Өртөг', content: 'Хайх' },
    { id: 'tab4', label: 'Газрын зураг', content: 'Хайх' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-view-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
          key={tab.id}
          className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
        >
          {tab.id === 'tab1' ? (
            <div>
              <WarehouseListView/>
            </div>
          ) : tab.id === 'tab2' ? (
            <div>
              <CustomTable/>
            </div>
          ) : tab.id === 'tab3' ? (
            <div>
              {/* Render content for tab3 */}
            </div>
          ) : tab.id === 'tab4' ? (
            <div>
              <Map/>
            </div>
          ) : (
            tab.content
          )}
        </div>
        ))}
</div>
    </div>
  );
}

export default TabView;
