import React, { useState } from 'react';

// A single Tab component
const Tab = ({ isActive, label, onClick, id }) => {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={`tab-button ${isActive ? 'active' : ''}`}
      id={`tab-${id}`}
      tabIndex={isActive ? 0 : -1}
    >
      {label}
    </button>
  );
};

// Main Tabs component
const Tabs = ({ tabsData, defaultTab = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTab);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setActiveTabIndex((prev) => (prev + 1) % tabsData.length);
    } else if (e.key === 'ArrowLeft') {
      setActiveTabIndex((prev) => (prev - 1 + tabsData.length) % tabsData.length);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Tabs"
        onKeyDown={handleKeyDown}
        className="tab-header"
      >
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            id={index}
            isActive={activeTabIndex === index}
            label={tab.label}
            onClick={() => setActiveTabIndex(index)}
          />
        ))}
      </div>
      <div className="tab-content" role="tabpanel" aria-labelledby={`tab-${activeTabIndex}`}>
        {tabsData[activeTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
